"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

import PersonalInfoStep from "./steps/personal-info-step";
import AddressDetailsStep from "./steps/address-details-step";
import AccountSetupStep from "./steps/account-setup-step";
import FormSummary from "./steps/form-summary";
import StepIndicator from "./step-indicator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Define the form schema using Zod
const formSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z
      .string()
      .min(5, "Zip code must be at least 5 digits")
      .regex(/^\d+$/, "Zip code must contain only numbers"),
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Define the form data type
type FormData = z.infer<typeof formSchema>;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  // Initialize form with React Hook Form
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Mock API submission
  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return data;
    },
    onSuccess: (data) => {
      console.log("Form submitted successfully:", data);
      setShowConfetti(true);
      toast({
        title: "Yay! Registration complete",
        description: "Your form has been submitted successfully.",
        variant: "default",
        duration: 3000,
      });
      setTimeout(() => {
        methods.reset();
        setCurrentStep(0);
        setShowConfetti(false);
      }, 3000);
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      toast({
        title: "Oops! Something went wrong",
        description:
          "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Steps configuration
  const steps = [
    {
      title: "Personal Info",
      component: <PersonalInfoStep />,
      icon: "👤",
    },
    {
      title: "Address",
      component: <AddressDetailsStep />,
      icon: "🏠",
    },
    {
      title: "Account",
      component: <AccountSetupStep />,
      icon: "🔐",
    },
    {
      title: "Summary",
      component: <FormSummary data={methods.getValues()} />,
      icon: "✓",
    },
  ];

  // Handle next step
  const handleNext = async () => {
    const fieldsToValidate = {
      0: ["fullName", "email", "phoneNumber"],
      1: ["streetAddress", "city", "zipCode"],
      2: ["username", "password", "confirmPassword"],
    }[currentStep];

    const isValid = await methods.trigger(fieldsToValidate as any);

    if (isValid) {
      if (currentStep === steps.length - 1) {
        // Submit the form
        submitMutation.mutate(methods.getValues());
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  // Confetti effect
  useEffect(() => {
    if (showConfetti) {
      const container = document.querySelector(".confetti-container");
      if (container) {
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 80%, 60%)`;
          confetti.style.animationDelay = `${Math.random() * 3}s`;
          container.appendChild(confetti);
        }

        return () => {
          if (container) {
            container.innerHTML = "";
          }
        };
      }
    }
  }, [showConfetti]);

  return (
    <FormProvider {...methods}>
      <div className="relative">
        {showConfetti && (
          <div className="confetti-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        )}
        <Card className="shadow-lg border-none form-card">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-8">
              <StepIndicator currentStep={currentStep} steps={steps} />
            </div>

            <div className="min-h-[320px] mb-8">
              {steps[currentStep].component}
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="w-full sm:w-auto rounded-full px-6 flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={submitMutation.isPending}
                className="w-full sm:w-auto rounded-full px-6 button-primary flex items-center gap-2 group"
              >
                {currentStep === steps.length - 1 ? (
                  submitMutation.isPending ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      Submit{" "}
                      <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </>
                  )
                ) : (
                  <>
                    Next{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
}

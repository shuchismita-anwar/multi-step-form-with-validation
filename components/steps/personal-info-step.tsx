"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { User, Mail, Phone } from "lucide-react"

export default function PersonalInfoStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-2xl font-bold">Tell us about yourself</h2>
        <p className="text-muted-foreground">Let's start with your personal information</p>
      </div>

      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> Full Name
            </FormLabel>
            <FormControl>
              <Input placeholder="John Doe" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> Email
            </FormLabel>
            <FormControl>
              <Input type="email" placeholder="john.doe@example.com" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> Phone Number
            </FormLabel>
            <FormControl>
              <Input
                placeholder="1234567890"
                className="form-input"
                {...field}
                onChange={(e) => {
                  // Only allow numbers
                  const value = e.target.value.replace(/\D/g, "")
                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

import { CheckIcon } from "lucide-react"

interface Step {
  title: string
  icon: string
}

interface StepIndicatorProps {
  currentStep: number
  steps: Step[]
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 step-circle ${
                index < currentStep
                  ? "bg-primary border-primary text-primary-foreground"
                  : index === currentStep
                    ? "border-primary text-primary active"
                    : "border-muted-foreground text-muted-foreground"
              }`}
            >
              {index < currentStep ? (
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <span className="text-lg">{step.icon}</span>
              )}
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm font-medium ${
                index <= currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Connecting lines with gradient */}
      <div
        className="absolute top-5 sm:top-6 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-transparent via-muted to-transparent"
        style={{ zIndex: 0 }}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

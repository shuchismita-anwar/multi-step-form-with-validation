import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { CheckCircle2, XCircle, User, Lock, ShieldCheck } from "lucide-react"

export default function AccountSetupStep() {
  const { control, watch } = useFormContext()
  const password = watch("password")

  // Password validation checks
  const hasMinLength = password?.length >= 6
  const hasLowercase = /[a-z]/.test(password || "")
  const hasUppercase = /[A-Z]/.test(password || "")
  const hasNumber = /[0-9]/.test(password || "")

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-2xl font-bold">Create your account</h2>
        <p className="text-muted-foreground">Set up your username and secure password</p>
      </div>

      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> Username
            </FormLabel>
            <FormControl>
              <Input placeholder="johndoe" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Password
            </FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••" className="form-input" {...field} />
            </FormControl>
            <div className="mt-2 space-y-1 text-sm">
              <p className="font-medium flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Password requirements:
              </p>
              <ul className="space-y-1 pl-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                <li className="flex items-center gap-2">
                  {hasMinLength ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span>At least 6 characters</span>
                </li>
                <li className="flex items-center gap-2">
                  {hasLowercase ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span>One lowercase letter</span>
                </li>
                <li className="flex items-center gap-2">
                  {hasUppercase ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span>One uppercase letter</span>
                </li>
                <li className="flex items-center gap-2">
                  {hasNumber ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span>One number</span>
                </li>
              </ul>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Confirm Password
            </FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

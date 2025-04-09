"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { MapPin, Building, Hash } from "lucide-react"

export default function AddressDetailsStep() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-2xl font-bold">Where do you live?</h2>
        <p className="text-muted-foreground">Please provide your address details</p>
      </div>

      <FormField
        control={control}
        name="streetAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Street Address
            </FormLabel>
            <FormControl>
              <Input placeholder="123 Main St" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" /> City
            </FormLabel>
            <FormControl>
              <Input placeholder="New York" className="form-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="zipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Hash className="h-4 w-4 text-primary" /> Zip Code
            </FormLabel>
            <FormControl>
              <Input
                placeholder="10001"
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

import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Building, Hash, ShieldCheck } from "lucide-react"

interface FormSummaryProps {
  data: {
    fullName: string
    email: string
    phoneNumber: string
    streetAddress: string
    city: string
    zipCode: string
    username: string
    password: string
    confirmPassword: string
  }
}

export default function FormSummary({ data }: FormSummaryProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-2xl font-bold">Almost there!</h2>
        <p className="text-muted-foreground">Please review your information before submitting</p>
      </div>

      <div className="space-y-4">
        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> Personal Information
            </h3>
          </div>
          <CardContent className="p-3">
            <dl className="grid grid-cols-3 gap-1 text-sm">
              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <User className="h-3 w-3" /> Name:
              </dt>
              <dd className="col-span-2">{data.fullName}</dd>

              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <Mail className="h-3 w-3" /> Email:
              </dt>
              <dd className="col-span-2">{data.email}</dd>

              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <Phone className="h-3 w-3" /> Phone:
              </dt>
              <dd className="col-span-2">{data.phoneNumber}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Address Details
            </h3>
          </div>
          <CardContent className="p-3">
            <dl className="grid grid-cols-3 gap-1 text-sm">
              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Street:
              </dt>
              <dd className="col-span-2">{data.streetAddress}</dd>

              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <Building className="h-3 w-3" /> City:
              </dt>
              <dd className="col-span-2">{data.city}</dd>

              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <Hash className="h-3 w-3" /> Zip Code:
              </dt>
              <dd className="col-span-2">{data.zipCode}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Account Information
            </h3>
          </div>
          <CardContent className="p-3">
            <dl className="grid grid-cols-3 gap-1 text-sm">
              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <User className="h-3 w-3" /> Username:
              </dt>
              <dd className="col-span-2">{data.username}</dd>

              <dt className="text-muted-foreground col-span-1 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Password:
              </dt>
              <dd className="col-span-2">••••••••</dd>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

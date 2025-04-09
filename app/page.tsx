import MultiStepForm from "@/components/multi-step-form"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Join Our Community
      </h1>
      <div className="max-w-3xl mx-auto px-4">
        <MultiStepForm />
      </div>
    </>
  )
}

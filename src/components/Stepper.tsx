interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => (
  <div className="flex items-center justify-center gap-1" role="navigation" aria-label="Progresso do formulário">
    {steps.map((step, i) => (
      <div key={i} className="flex items-center gap-1">
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              i < currentStep ? 'bg-primary text-primary-foreground' :
              i === currentStep ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' :
              'bg-muted text-muted-foreground'
            }`}
          >
            {i < currentStep ? '✓' : i + 1}
          </div>
          <span className={`text-xs mt-1 hidden sm:block ${i <= currentStep ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            {step}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div className={`w-8 sm:w-12 h-0.5 mb-4 sm:mb-0 ${i < currentStep ? 'bg-primary' : 'bg-muted'}`} />
        )}
      </div>
    ))}
  </div>
);

export default Stepper;

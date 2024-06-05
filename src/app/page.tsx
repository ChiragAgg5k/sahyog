import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <div
    className={
        "flex flex-col items-center justify-center min-h-screen bg-background font-sans antialiased"
    }
    >
      <h1
      className={
            "text-5xl font-bold text-center text-primary mb-4"
      }
      >
        सहयोग
      </h1>
      <p
      className={
            "text-md font-semibold text-center max-w-xl mb-4"
      }
      >
        Unlock the power of collaboration with Sahayog.
      </p>
      <p
      className={
            "text-md font-light text-center max-w-xl mb-4"
      }
      >
        The all-in-one platform for your team to collaborate, communicate, and get things done.
      </p>
      <div
      className={
            "flex space-x-4"

      }
      >
        <Button
            variant={`outline`}
        >
          Learn More
        </Button>
        <Button>
            Get Started
        </Button>
      </div>
    </div>
  );
}

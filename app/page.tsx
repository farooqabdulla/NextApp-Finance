import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Lock, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EvoXcel</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Master Your Money, Shape Your Future
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take control of your financial journey with powerful tools for budgeting, 
                tracking expenses, and achieving your financial goals.
              </p>
              <div className="mt-8">
                <Link href="/signup">
                  <Button size="lg" className="mr-4">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20" id="features">
              <div className="p-6 rounded-lg border bg-card">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
                <p className="text-muted-foreground">
                  Visualize your spending patterns and make informed financial decisions
                  with intuitive charts and reports.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                <p className="text-muted-foreground">
                  Your financial data is protected with enterprise-grade encryption
                  and security measures.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
                <p className="text-muted-foreground">
                  Create and manage custom budgets that help you reach your
                  financial goals faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 EvoXcel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import Link from 'next/link';
import { ArrowRight, Users, Award, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Unknown University
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn cutting-edge technologies with industry experts. Master web
              development, AI, data science, and cloud architecture.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/programs"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium inline-flex items-center gap-2"
              >
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/(auth)/login"
                className="px-8 py-3 border rounded-lg hover:bg-secondary transition font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border hover:border-primary transition">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of experience
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:border-primary transition">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
              <p className="text-muted-foreground">
                Build real projects and gain practical experience
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:border-primary transition">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with thousands of learners and get help when needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Web Development',
              'AI & ML',
              'Data Science',
              'Cloud Architecture',
            ].map((program) => (
              <div
                key={program}
                className="p-6 rounded-lg bg-background border hover:border-primary transition cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{program}</h3>
                <p className="text-sm text-muted-foreground">Learn more</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students already learning with Unknown University
          </p>
          <Link
            href="/(auth)/register"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}

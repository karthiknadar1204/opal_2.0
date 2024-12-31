import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
} from "@/data/landing";
import Link from "next/link";
import HeroSection from "@/components/hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature) => (
              <Card key={feature.title} className="p-8 hover:shadow-xl transition-shadow duration-300 border-none bg-white/80 backdrop-blur">
                <CardContent className="space-y-6 pt-4">
                  <div className="transform hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {howItWorksData.map((step) => (
              <div key={step.title} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-50 mb-12 max-w-2xl mx-auto text-lg">
            Join thousands of users who are already managing their finances
            smarter with Opal
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 px-12 py-6 text-lg font-semibold shadow-lg"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

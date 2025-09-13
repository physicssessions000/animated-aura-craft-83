import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fadeInUp">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary">
              Rakesh Vajrapu
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground animate-typing">
              Full-Stack Developer & AI Enthusiast
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate Software Engineer with expertise in Python, JavaScript, AI/ML, and Data Science, skilled in leveraging Cloud Technologies to build innovative solutions. I thrive on bridging the gap between complex problems and elegant code, crafting intelligent systems that combine scalability, performance, and data-driven insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 transition-all duration-300">
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:rakeshrb1411@gmail.com" className="p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a href="https://linkedin.com/in/rakeshvajrapu" className="p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a href="https://github.com/rakesh-vajrapu" className="p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a href="tel:+919110343290" className="p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Phone className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
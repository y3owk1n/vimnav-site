import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  KeyboardIcon,
  ZapIcon,
  EyeIcon,
  SettingsIcon,
  CommandIcon,
  MousePointerClickIcon,
  CheckIcon,
  XIcon,
  SparklesIcon,
  RocketIcon,
  StarIcon,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border sticky top-0 z-[60] backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <StarIcon className="h-5 w-5 text-primary animate-pulse" />
            <p className="text-sm md:text-base font-medium">
              <span className="hidden sm:inline">Enjoying Vimnav? </span>
              <span className="font-bold">Give us a star on GitHub!</span>
              <span className="hidden md:inline text-muted-foreground ml-2">
                It helps more keyboard warriors find their way.
              </span>
            </p>
          </div>
          <Button size="sm" asChild className="hover:scale-105 transform transition-transform shadow-md">
            <a href="https://github.com/y3owk1n/Vimnav.spoon" target="_blank" rel="noopener noreferrer">
              <StarIcon className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">Star on GitHub</span>
              <span className="sm:hidden">Star</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-[52px] z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KeyboardIcon className="h-6 w-6 text-primary animate-pulse" />
            <span className="font-mono text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vimnav.spoon
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Features
            </a>
            <a
              href="#keybindings"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Keybindings
            </a>
            <a
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              FAQ
            </a>
            <ThemeToggle />
            <Button asChild size="sm" className="hover:scale-105 transform transition-transform">
              <a href="https://github.com/y3owk1n/Vimnav.spoon" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-6 font-mono border border-primary/20 hover:border-primary transition-colors"
            >
              <SparklesIcon className="h-3 w-3 mr-1 inline" />
              System-wide Vim Navigation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Your mouse?{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                You won't need it anymore.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Navigate Safari, Mail, Finder, or any macOS app with the same muscle memory you use in Vim. Think Vimium,
              but system-wide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="hover:scale-105 transform transition-all shadow-lg hover:shadow-primary/30"
              >
                <a href="#installation">
                  <RocketIcon className="mr-2 h-5 w-5" />
                  Ascend to Keyboard Mastery
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:scale-105 transform transition-all border bg-transparent"
              >
                <a href="https://github.com/y3owk1n/Vimnav.spoon" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496427441-b32374e0-5446-46f8-99d2-bfae1bc90799-qYpksj6uh9eayQ5JMvJ0HurjyhINjM.jpg"
              alt="Vimnav in action on GitHub"
              className="relative rounded-lg border border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
            />
          </div>
        </div>
      </section>

      {/* Mouse vs Keyboard Section */}
      <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative z-10">The Eternal Struggle</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative z-10 items-start">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/30 opacity-70 hover:opacity-80 transition-opacity transform hover:-rotate-2 hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-destructive/20 flex items-center justify-center border-2 border-destructive/30">
                <XIcon className="h-6 w-6 text-destructive animate-wiggle" />
              </div>
              <h3 className="text-2xl font-bold text-destructive">Mouse Users</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 text-xl">•</span>
                <span>Constantly moving hand between keyboard and mouse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 text-xl">•</span>
                <span>Developing carpal tunnel syndrome</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 text-xl">•</span>
                <span>Hunting for tiny UI elements like it's 1995</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 text-xl">•</span>
                <span>Accidentally clicking ads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1 text-xl">•</span>
                <span>Still trying to exit Vim</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-primary border-4 relative transform hover:rotate-2 hover:scale-105 duration-300 shadow-xl hover:shadow-primary/50">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg">
              You
            </Badge>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center border-2 border-primary">
                <KeyboardIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vimnav Enjoyers
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xl">✓</span>
                <span className="font-medium">Hands never leave home row</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xl">✓</span>
                <span className="font-medium">Navigate at the speed of thought</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xl">✓</span>
                <span className="font-medium">Mouse gathering dust on desk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xl">✓</span>
                <span className="font-medium">Impressing coworkers with keyboard wizardry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xl">✓</span>
                <span className="font-medium">Already exited Vim (with :wq obviously)</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-24 bg-gradient-to-b from-background to-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Vimnav?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-primary/30">
              <CommandIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Works Across All Native macOS Apps
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Safari, Mail, Finder, System Settings — if it's a native macOS app, Vimnav works with it.
            </p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-accent/30">
              <MousePointerClickIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Visual Link Hints</h3>
            <p className="text-muted-foreground leading-relaxed">
              Click anything without touching your mouse. Press{" "}
              <code className="text-accent font-mono bg-secondary px-1.5 py-0.5 rounded">f</code> to see hints overlay
              on all clickable elements.
            </p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-primary/30">
              <ZapIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Smart Mode Switching</h3>
            <p className="text-muted-foreground leading-relaxed">
              Auto-enters insert mode in text fields. Press{" "}
              <code className="text-primary font-mono bg-secondary px-1.5 py-0.5 rounded">Esc</code> to unlock Vim-like
              editing.
            </p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-accent/30">
              <EyeIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Modal Text Editing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Normal and Visual modes inside text fields. Only for mappable shortcuts, but better than nothing!
            </p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-primary/30">
              <ZapIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Performance Optimized</h3>
            <p className="text-muted-foreground leading-relaxed">
              Async traversal, spatial indexing, and memory pooling ensure smooth navigation even in complex apps.
            </p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-accent/30">
              <SettingsIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Highly Customizable</h3>
            <p className="text-muted-foreground leading-relaxed">
              Configure keybindings, leader key combinations, and custom functions you can run with keyboard shortcuts.
              Configure everything in your Hammerspoon init.lua to match your workflow perfectly.
            </p>
          </Card>
        </div>
      </section>

      {/* Keybindings Section */}
      <section id="keybindings" className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Essential Keybindings</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Navigate with the same muscle memory you use in Vim
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 duration-300">
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <SparklesIcon className="h-5 w-5" />
                Core Navigation
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Scroll</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    h j k l
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Half page</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    Ctrl-d / Ctrl-u
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Top / Bottom</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    gg / G
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Back / Forward</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    H / L
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Search</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    /
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Next / Prev</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    n / N
                  </code>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-2 border-accent/30 hover:border-accent transition-all hover:scale-105 duration-300">
              <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                <SparklesIcon className="h-5 w-5" />
                Link Hints Mode
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Click element</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    f
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Double click</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    F
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Right-click</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    r
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Jump to input</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    gi
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Move mouse</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    gf
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Copy link URL</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    yf
                  </code>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 duration-300">
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <SparklesIcon className="h-5 w-5" />
                Insert Normal Mode
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Normal mode</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    Esc
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Move cursor</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    h j k l
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Word end / back</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    e / b
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Line start / end</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    0 / $
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Delete word</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    diw / ciw
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Visual mode</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-primary/20">
                    v
                  </code>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-2 border-accent/30 hover:border-accent transition-all hover:scale-105 duration-300">
              <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                <SparklesIcon className="h-5 w-5" />
                Passthrough Mode
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Enter passthrough</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    i
                  </code>
                </div>
                <div className="flex justify-between items-center hover:bg-secondary/50 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Exit passthrough</span>
                  <code className="bg-secondary px-3 py-1.5 rounded-lg text-foreground font-bold border border-accent/20">
                    Shift-Esc
                  </code>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                In passthrough mode, every key press is sent directly to the app. Use this when you need full app
                control.
              </p>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 hover:border-primary transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  And Much More...
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These are just the essentials! Vimnav supports <strong>custom keybindings</strong>,{" "}
                  <strong>leader key combinations</strong>, and <strong>custom functions</strong> you can run with
                  keyboard shortcuts. Configure everything in your Hammerspoon init.lua to match your workflow
                  perfectly.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform shrink-0 bg-transparent"
              >
                <a
                  href="https://github.com/y3owk1n/Vimnav.spoon#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  View Full Documentation
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="container mx-auto px-4 py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What People Are Saying</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Real testimonials from real keyboard enthusiasts*
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah J.",
                role: "Senior Developer",
                quote:
                  "I haven't touched my mouse in 3 months. My coworkers think I'm a wizard. I'm not correcting them.",
                initials: "SJ",
              },
              {
                name: "Mike K.",
                role: "Tech Lead",
                quote: "My productivity increased by 300%. My mouse usage decreased by 100%. Math checks out.",
                initials: "MK",
              },
              {
                name: "Alex L.",
                role: "Full Stack Engineer",
                quote: "I tried to use a mouse yesterday and forgot how. Send help. Actually, don't. I'm fine.",
                initials: "AL",
              },
              {
                name: "Taylor C.",
                role: "DevOps Engineer",
                quote: "Finally, I can browse Reddit at work and still look like I'm being productive.",
                initials: "TC",
              },
              {
                name: "Jordan D.",
                role: "Software Architect",
                quote: "My RSI is gone. My mouse is lonely. My keyboard is happy. 10/10 would hjkl again.",
                initials: "JD",
              },
              {
                name: "Riley P.",
                role: "Backend Developer",
                quote: "I showed this to my Emacs-using friend. We don't talk anymore. Worth it.",
                initials: "RP",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-rotate-1"
              >
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary border-2 border-primary/30">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            *Testimonials may or may not be real. But the keyboard shortcuts definitely are.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pricing</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Choose the plan that's right for you (spoiler: they're all free)
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Hobbyist</h3>
                <p className="text-muted-foreground text-sm mb-4">For casual mouse haters</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">All features included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited hjkl presses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No telemetry or tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">MIT License</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent hover:bg-primary/10" variant="outline" asChild>
                <a href="#installation">Get Started</a>
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-primary relative transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-primary/50">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg text-sm px-4 py-1">
                Most Popular
              </Badge>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-muted-foreground text-sm mb-4">For serious keyboard warriors</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Everything in Hobbyist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Still completely free</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Bragging rights at meetups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Your mouse collects dust</span>
                </li>
              </ul>
              <Button className="w-full shadow-lg hover:shadow-xl" asChild>
                <a href="#installation">Get Started</a>
              </Button>
            </Card>

            <Card className="p-8 bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground text-sm mb-4">For teams who :wq in their sleep</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Literally the same as Free</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No sales calls required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Open source forever</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent hover:bg-accent/10" variant="outline" asChild>
                <a href="#installation">Get Started</a>
              </Button>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Seriously though, it's open source. Just star the repo on GitHub if you like it.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">The answers you seek, keyboard warrior</p>

          <div className="space-y-4">
            {[
              {
                q: "Will this work with my favorite app?",
                a: "If it's a native macOS app, yes. If it's Electron, maybe. If it's a web app, use Vimium. If it's Microsoft Word, I'm sorry for your loss.",
              },
              {
                q: "Do I need to know Vim to use this?",
                a: "Technically no, but if you don't know Vim, what are you even doing with your life? Go learn Vim first, then come back. We'll wait.",
              },
              {
                q: "Will this make me more productive?",
                a: "Absolutely. You'll spend the first week configuring it, the second week showing it off to colleagues, and by week three you'll wonder how you ever lived without it.",
              },
              {
                q: "Can I still use my mouse?",
                a: "You can, but why would you want to? That's like buying a sports car and only driving in first gear. Live a little. Embrace the keyboard life.",
              },
              {
                q: "Is this better than Emacs?",
                a: "We don't engage in editor wars here. But yes, obviously. (Just kidding, Emacs users. Sort of.)",
              },
              {
                q: "How do I exit Vimnav?",
                a: "Nice try. But seriously, just disable it in Hammerspoon if you need to. Or don't. Once you start, you won't want to stop.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:scale-102 hover:shadow-lg"
              >
                <h3 className="font-bold text-lg mb-2 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Quick Start</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Get up and running in minutes</p>

          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30 shadow-xl">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Install Hammerspoon",
                  desc: "Download and install Hammerspoon from the official website.",
                  hasButton: true,
                  buttonText: "Download Hammerspoon",
                  buttonUrl: "https://www.hammerspoon.org/",
                },
                {
                  step: 2,
                  title: "Enable Accessibility",
                  desc: "Go to System Settings → Privacy & Security → Accessibility and enable Hammerspoon.",
                },
                {
                  step: 3,
                  title: "Download Vimnav",
                  desc: "Download the latest release or git clone this repo, and place Vimnav.spoon in ~/.hammerspoon/Spoons/",
                  hasButton: true,
                  buttonText: "Download Latest Release",
                  buttonUrl: "https://github.com/y3owk1n/Vimnav.spoon/releases/latest",
                },
                { step: 4, title: "Configure", desc: "Add to ~/.hammerspoon/init.lua:", hasCode: true },
                { step: 5, title: "Reload", desc: "Reload Hammerspoon and start navigating!" },
              ].map((item) => (
                <div key={item.step} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-11 mb-3 leading-relaxed">{item.desc}</p>
                  {item.hasButton && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-11 bg-transparent border-2 hover:border-primary hover:scale-105 transition-all"
                      asChild
                    >
                      <a href={item.buttonUrl} target="_blank" rel="noopener noreferrer">
                        {item.buttonText}
                      </a>
                    </Button>
                  )}
                  {item.hasCode && (
                    <div className="ml-11 bg-secondary/80 p-4 rounded-lg font-mono text-sm border-2 border-primary/20">
                      <pre className="text-foreground">
                        {`hs.loadSpoon("Vimnav")
spoon.Vimnav:start()`}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ready to ascend to keyboard mastery?</p>
            <Button
              size="lg"
              asChild
              className="hover:scale-105 transform transition-all shadow-lg hover:shadow-primary/50"
            >
              <a href="https://github.com/y3owk1n/Vimnav.spoon" target="_blank" rel="noopener noreferrer">
                <RocketIcon className="mr-2 h-5 w-5" />
                Get Started on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <KeyboardIcon className="h-5 w-5 text-primary" />
              <span className="font-mono font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vimnav.spoon
              </span>
            </div>
            <p className="text-sm text-muted-foreground">MIT License • Built with Hammerspoon</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/y3owk1n/Vimnav.spoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
              >
                GitHub
              </a>
              <a
                href="https://github.com/y3owk1n/Vimnav.spoon/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
              >
                Releases
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

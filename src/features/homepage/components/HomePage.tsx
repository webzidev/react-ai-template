import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/layout/mode-toggle";

const highlights = [
	{ label: "Time saved per event", value: "32 hrs" },
	{ label: "Vendors orchestrated", value: "85+" },
	{ label: "Guest happiness", value: "97%" },
];

const features = [
	{
		title: "AI co-pilot",
		description:
			"Digest briefs, calendar constraints, and moodboards to craft an adaptive event blueprint in seconds.",
	},
	{
		title: "Smart sourcing",
		description:
			"Surface vendors that match style, budget, and logistics—complete with contract-ready recommendations.",
	},
	{
		title: "Adaptive run of show",
		description:
			"Partix predicts micro-delays and auto-resequences your timeline so every moment still lands perfectly.",
	},
];

const timeline = [
	{
		stage: "Inspiration",
		detail:
			"Answer a conversational intake and Partix extracts tone, audience personas, and measurable goals.",
	},
	{
		stage: "Design",
		detail:
			"Generate moodboards, menu ideas, and spatial layouts that stay editable as your vision evolves.",
	},
	{
		stage: "Production",
		detail:
			"Assign tasks, sync stakeholders, and watch AI update budgets, briefs, and messaging in real time.",
	},
	{
		stage: "Showtime",
		detail:
			"Partix monitors live signals—from RSVPs to onsite sensors—to keep energy and flow effortlessly on-brand.",
	},
];

const testimonials = [
	{
		quote:
			"Partix feels like having a veteran producer on speed dial. The AI catches things my team used to scramble over.",
		name: "Amelia Stone",
		role: "Founder, Velvet Ribbon Events",
	},
	{
		quote:
			"We scaled our corporate experiences globally without adding headcount. Every launch now has a distinctive signature.",
		name: "Karan Patel",
		role: "VP Experiential, Lumina Labs",
	},
];

export function HomePage() {
	return (
		<div className="relative overflow-hidden bg-background text-foreground">
			<div className="pointer-events-none absolute inset-0 -z-20">
				<div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-[140px]" />
				<div className="absolute right-10 top-32 h-96 w-96 rounded-full bg-secondary/35 blur-[180px]" />
				<div className="absolute bottom-[-6rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[200px]" />
			</div>
			<div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_top,rgba(79,70,229,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_55%)] dark:opacity-70" />

			<header className="relative">
				<div className="absolute right-6 top-6">
					<ModeToggle />
				</div>
				<div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:text-left">
					<div className="relative mx-auto max-w-4xl">
						<span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary backdrop-blur">Introducing Partix AI</span>
						<h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
							Orchestrate unforgettable experiences with an AI events partner.
						</h1>
						<p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
							Partix AI designs, sources, and manages every detail of modern gatherings—from intimate dinners to multi-city brand festivals—so your team can focus on the story you&apos;re telling.
						</p>
						<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
							<Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/40">
								Start planning in minutes
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="h-12 border-primary/50 bg-background/70 px-8 text-base text-primary backdrop-blur transition hover:bg-primary/10"
							>
								Watch product walkthrough
							</Button>
						</div>
						<div className="mt-12 grid gap-6 sm:grid-cols-3">
							{highlights.map((item) => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-background/60 p-6 text-center backdrop-blur"
								>
									<p className="text-3xl font-semibold sm:text-4xl">{item.value}</p>
									<p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</header>

			<section className="container mx-auto px-6 pb-24">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						Where intelligence meets ambiance
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Partix pairs neural planning with human nuance, turning moodboards and brand objectives into living event systems that evolve with every new signal.
					</p>
				</div>
				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{features.map((feature) => (
						<Card
							key={feature.title}
							className="border border-white/10 bg-background/80 shadow-[0_1px_40px_rgba(99,102,241,0.08)] backdrop-blur"
						>
							<CardHeader>
								<CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="relative overflow-hidden pb-24">
				<div className="absolute inset-x-6 top-0 h-full rounded-3xl border border-white/10 bg-background/70 backdrop-blur" />
				<div className="relative z-10 mx-auto max-w-6xl px-10 py-16">
					<div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
						<div>
							<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A timeline that flexes in real-time</h2>
							<p className="mt-4 max-w-xl text-muted-foreground">
								From brainstorming to post-event reporting, Partix keeps the entire lifecycle orchestrated and ready to adapt.
							</p>
						</div>
						<Dialog>
							<DialogTrigger asChild>
								<Button size="lg" className="h-12 px-8">
									Preview intelligent run of show
								</Button>
							</DialogTrigger>
							<DialogContent className="max-w-2xl">
								<DialogHeader>
									<DialogTitle>Sample launch night itinerary</DialogTitle>
									<DialogDescription>
										Live adjustments surface in the sidebar as guest sentiment and venue signals flow in.
									</DialogDescription>
								</DialogHeader>
								<div className="grid gap-6">
									{timeline.map((entry) => (
										<Card key={entry.stage} className="border border-primary/30 bg-background/90">
											<CardHeader className="pb-2">
												<CardTitle className="text-lg font-semibold text-primary">
													{entry.stage}
												</CardTitle>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground">{entry.detail}</p>
											</CardContent>
										</Card>
									))}
								</div>
							</DialogContent>
						</Dialog>
					</div>
					<div className="mt-12 grid gap-6 md:grid-cols-2">
						{timeline.map((entry) => (
							<Card
								key={`timeline-${entry.stage}`}
								className="border border-white/10 bg-background/80 backdrop-blur"
							>
								<CardHeader>
									<CardTitle className="text-2xl font-semibold text-primary">
										{entry.stage}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base text-muted-foreground">
										{entry.detail}
									</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-6 pb-24">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						Producers who never go back
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Boutique studios and global brands trust Partix to harmonize vision, budgets, and execution.
					</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-2">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.name} className="border border-white/10 bg-background/80 backdrop-blur">
							<CardContent className="space-y-6 p-8">
								<p className="text-lg leading-relaxed">
									“{testimonial.quote}”
								</p>
								<div>
									<p className="text-sm font-semibold uppercase tracking-wide">
										{testimonial.name}
									</p>
									<p className="text-sm text-muted-foreground">{testimonial.role}</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="relative px-6 pb-24">
				<div className="container mx-auto">
					<Card className="overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-background shadow-[0_1px_60px_rgba(59,130,246,0.18)]">
						<CardContent className="flex flex-col items-center gap-8 px-8 py-16 text-center md:flex-row md:items-center md:justify-between md:text-left">
							<div className="max-w-2xl space-y-4">
								<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
									Host with intuition. Execute with precision.
								</h2>
								<p className="text-lg text-muted-foreground">
									See how Partix AI personalizes every touchpoint of your next gathering across guests, teams, and venues.
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 sm:flex-row">
								<Button size="lg" className="h-12 w-full px-8 text-base sm:w-auto">
									Book a creative lab session
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="h-12 w-full border-primary/40 px-8 text-base text-primary hover:bg-primary/10 sm:w-auto"
								>
									Explore pricing
								</Button>
							</div>
						</CardContent>
						</Card>
				</div>
			</section>

			<footer className="border-t border-white/10 bg-background/80 py-10 backdrop-blur">
				<div className="container mx-auto flex flex-col gap-4 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
					<p className="font-semibold text-foreground">Partix AI</p>
					<p>Designing future-ready experiences since 2024.</p>
					<div className="flex justify-center gap-4 sm:justify-end">
						<a href="#" className="transition hover:text-primary">
							Privacy
						</a>
						<a href="#" className="transition hover:text-primary">
							Status
						</a>
						<a href="#" className="transition hover:text-primary">
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

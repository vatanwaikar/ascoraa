// import { Star } from 'lucide-react'
// import { Container } from '@/components/ui/container'

// const testimonials = [
//   {
//     name: 'Ahmed Hassan',
//     role: 'Export Manager, Textile Industries',
//     company: 'Emirates Trading Co.',
//     content:
//       'Ascora transformed how we manage our export operations. We increased our market reach by 300% in just 6 months. The platform is intuitive and their support team is exceptional.',
//     rating: 5,
//   },
//   {
//     name: 'Isabella Romano',
//     role: 'Procurement Director',
//     company: 'Bella Imports Ltd.',
//     content:
//       "Finding reliable suppliers was always challenging. With Ascora's verified partner network, we've streamlined our sourcing process and reduced costs significantly.",
//     rating: 5,
//   },
//   {
//     name: 'Chen Wei',
//     role: 'Business Development Manager',
//     company: 'Pacific Logistics Group',
//     content:
//       'The analytics dashboard gives us insights we never had before. Real-time market data helps us make informed trading decisions. Highly recommended for any serious trader.',
//     rating: 5,
//   },
//   {
//     name: 'Maria Gonzalez',
//     role: 'Owner',
//     company: 'La Exportadora',
//     content:
//       "From compliance to logistics, Ascora handles everything. It's like having an expert team at your fingertips. Saved us thousands in operational costs.",
//     rating: 5,
//   },
// ]

// export function TestimonialsSection() {
//   return (
//     <section className="py-20 sm:py-32 bg-secondary/30">
//       <Container>
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Trusted by Global Leaders
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             See what our partners say about their experience with Ascora
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-200"
//             >
//               {/* Rating */}
//               <div className="flex gap-1 mb-4">
//                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     className="fill-accent text-accent"
//                   />
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="text-foreground mb-6 leading-relaxed italic">
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div className="border-t border-border pt-6">
//                 <p className="font-semibold text-foreground mb-1">
//                   {testimonial.name}
//                 </p>
//                 <p className="text-sm text-accent font-medium mb-1">
//                   {testimonial.role}
//                 </p>
//                 <p className="text-sm text-muted-foreground">
//                   {testimonial.company}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badge */}
//         <div className="mt-16 pt-16 border-t border-border">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
//               <p className="text-sm text-muted-foreground">Average Rating</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">98%</div>
//               <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">100+</div>
//               <p className="text-sm text-muted-foreground">Verified Suppliers</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary mb-2">150+</div>
//               <p className="text-sm text-muted-foreground">Countries Covered</p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }

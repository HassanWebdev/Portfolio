/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const clientReviews = [
  {
    name: "Michael Thompson",
    userId: "@michael_t_dev",
    country: "United States",
    platform: "Upwork",
    stars: 5,
    message:
      "Hassan Raza delivered exceptional results on our e-commerce platform. His MERN stack expertise is outstanding. He tackled complex API integrations seamlessly and was incredibly responsive throughout the project. I've worked with many developers, but Hassan's code quality and problem-solving approach stand out. Definitely hiring him again for our next phase!",
  },
  {
    name: "Sophie Chen",
    userId: "@sophie.chen.92",
    country: "Singapore",
    platform: "Fiverr",
    stars: 5,
    message:
      "I hired Hassan for a React dashboard project and I'm blown away by the results. He understood our requirements from day one and suggested improvements that we hadn't even considered. The animations and UI he created are smooth and professional. Communication was clear, deadlines were met, and he even provided documentation. Worth every penny!",
  },
  {
    name: "James O'Connor",
    userId: "@james_oconnor_tech",
    country: "Ireland",
    platform: "Upwork",
    stars: 5,
    message:
      "Working with Hassan Raza was a breath of fresh air. He took our vague concept and turned it into a fully functional web application. His MongoDB schema design saved us from potential scaling issues down the road. He's not just a coder – he thinks like a product engineer. Already planning our next collaboration!",
  },
  {
    name: "Priya Sharma",
    userId: "@priya.sharma.designs",
    country: "India",
    platform: "Freelancer",
    stars: 4,
    message:
      "Hassan built a custom CMS for our content team and it works flawlessly. He was patient with our frequent change requests and always maintained a professional attitude. The only minor issue was timezone coordination, but he made it work by being flexible with meeting times. Solid developer who delivers on promises.",
  },
  {
    name: "David Kowalski",
    userId: "@davidk_solutions",
    country: "Poland",
    platform: "Upwork",
    stars: 5,
    message:
      "I've hired Hassan Raza for three projects now, and each time he exceeds expectations. His full-stack capabilities are impressive – from setting up Express servers to creating beautiful frontend experiences. He caught several security vulnerabilities during code review that could have been costly. Highly recommend him for any serious web development work.",
  },
  {
    name: "Emma Rodriguez",
    userId: "@emma.rod_creative",
    country: "Spain",
    platform: "Fiverr",
    stars: 5,
    message:
      "Hassan transformed our outdated website into a modern, responsive platform. His attention to performance optimization was remarkable – our load times improved by 60%! He explained technical concepts in a way that non-technical stakeholders could understand. Professional, skilled, and a genuine pleasure to collaborate with.",
  },
  {
    name: "Thomas Müller",
    userId: "@thomas_mueller_88",
    country: "Germany",
    platform: "Freelancer",
    stars: 4,
    message:
      "Hassan Raza delivered a solid booking system for our rental business. The integration with payment gateways was handled professionally. He provided regular updates and was always available when we had questions. There were a few minor bugs post-launch, but he fixed them promptly without additional charges. Reliable and trustworthy developer.",
  },
  {
    name: "Aisha Mohammed",
    userId: "@aisha.mohammed.pro",
    country: "United Arab Emirates",
    platform: "Upwork",
    stars: 5,
    message:
      "I needed a complex real-time chat feature for our platform, and Hassan nailed it using Socket.io and Node.js. The implementation is clean, scalable, and handles concurrent users beautifully. He went above and beyond by adding features we hadn't even discussed. His expertise in the MERN stack is clearly demonstrated in the final product.",
  },
  {
    name: "Lucas Silva",
    userId: "@lucas.silva_dev",
    country: "Brazil",
    platform: "Fiverr",
    stars: 5,
    message:
      "Hassan Raza is the real deal! He rebuilt our entire frontend using Next.js and the performance improvements are incredible. SEO rankings have improved significantly thanks to his implementation of SSR. He's meticulous about code organization and left our codebase in excellent shape. Looking forward to working with him on future projects!",
  },
  {
    name: "Olivia Williams",
    userId: "@olivia_w_consulting",
    country: "Australia",
    platform: "Upwork",
    stars: 5,
    message:
      "Hiring Hassan was one of the best decisions for our startup. He developed our MVP from scratch and helped us launch on time for our investor pitch. His understanding of both frontend and backend development meant we only needed one developer instead of two. He's professional, communicative, and genuinely cares about the success of the project. Can't recommend him enough!",
  },
];

const StarRating = ({ rating }) => {
  return (
    <Box>
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <Star key={index} color="primary" />
        ) : (
          <StarBorder key={index} color="primary" />
        )
      )}
    </Box>
  );
};

const getPlatformBadgeStyle = (platform) => {
  const styles = {
    Upwork: { bg: "#14A800", color: "#fff" },
    Fiverr: { bg: "#1DBF73", color: "#fff" },
    Freelancer: { bg: "#0E77B7", color: "#fff" },
  };
  return styles[platform] || styles.Upwork;
};

const ReviewCard = ({ review }) => {
  const badgeStyle = getPlatformBadgeStyle(review.platform);
  
  return (
    <Card sx={{ width: 350, m: 2, flexShrink: 0, position: 'relative' }}>
      <CardContent>
        {/* Platform Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: badgeStyle.bg,
            color: badgeStyle.color,
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
          }}
        >
          {review.platform}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={`https://i.pravatar.cc/150?u=${review.name}`}
            alt={review.name}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1rem', fontWeight: 600 }}>
              {review.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              {review.userId} • {review.country}
            </Typography>
            <StarRating rating={review.stars} />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          "{review.message}"
        </Typography>
      </CardContent>
    </Card>
  );
};

const ReviewMarquee = () => {
  return (
    <div className="w-screen  bg-white md:px-10 px-5 flex flex-col gap-10 pt-5">
      <h1 className="font-neue_montreal text-3xl tracking-wide opacity-85 uppercase">Reviews</h1>
      <Box sx={{ mt: 0 }}>
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="hover:cursor-pointer">
          {clientReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Marquee>
      </Box>
      <Box sx={{ mt: 0 }}>
        {/* <Marquee gradient={false} speed={40} pauseOnHover={true} direction='right' className="hover:cursor-pointer">
          {clientReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Marquee> */}
      </Box>
    </div>
  );
};

export default ReviewMarquee;
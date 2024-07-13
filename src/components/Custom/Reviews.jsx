"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const clientReviews = [
  {
    name: "Sarah Johnson",
    stars: 5,
    message:
      "Absolutely amazing work! The project was completed ahead of schedule and exceeded all my expectations. Highly recommended!",
  },
  {
    name: "Michael Chen",
    stars: 4,
    message:
      "Very professional and responsive. The final product was exactly what I needed for my business. Great job!",
  },
  {
    name: "Emily Rodriguez",
    stars: 5,
    message:
      "Incredible attention to detail. The project was flawless and the communication throughout was excellent. Will definitely work with again!",
  },
  {
    name: "David Thompson",
    stars: 5,
    message:
      "Outstanding service! The project was delivered on time and the quality of work was top-notch. Couldn't be happier with the results.",
  },
  {
    name: "Lisa Patel",
    stars: 4,
    message:
      "Great experience working together. Very patient with revisions and delivered a fantastic end product. Thank you!",
  },
  {
    name: "Alex Novak",
    stars: 5,
    message:
      "Exceptional skills and creativity. The project turned out even better than I imagined. A true professional!",
  },
  {
    name: "Olivia Kim",
    stars: 4,
    message:
      "Reliable and efficient. Completed the project within the agreed timeframe and was always available for questions. Would recommend!",
  },
  {
    name: "Ryan Martinez",
    stars: 5,
    message:
      "Brilliant work! The attention to detail and problem-solving skills were impressive. Looking forward to our next collaboration!",
  },
  {
    name: "Emma Wilson",
    stars: 5,
    message:
      "A pleasure to work with. Understood my vision perfectly and delivered beyond expectations. Will definitely hire again!",
  },
  {
    name: "Daniel Lee",
    stars: 4,
    message:
      "Very knowledgeable and skilled. Provided valuable insights that improved the initial concept. Great communication throughout the project.",
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

const ReviewCard = ({ review }) => (
  <Card sx={{ width: 300, m: 2, flexShrink: 0 }}>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          src={`https://i.pravatar.cc/150?u=${review.name}`}
          alt={review.name}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" component="div">
            {review.name}
          </Typography>
          <StarRating rating={review.stars} />
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        "{review.message}"
      </Typography>
    </CardContent>
  </Card>
);

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
        <Marquee gradient={false} speed={40} pauseOnHover={true} direction='right' className="hover:cursor-pointer">
          {clientReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Marquee>
      </Box>
    </div>
  );
};

export default ReviewMarquee;
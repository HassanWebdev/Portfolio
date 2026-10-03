/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const clientReviews = [
  {
    name: "Bud Leinger",
    role: "Founder, VAYAFAC",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    stars: 5,
    message:
      "Hassan built a secure, responsive payment UI for VAYAFAC with strict client-side validation and reliable REST integrations. Transaction flows felt solid in production, and he was sharp on edge cases we had not covered.",
  },
  {
    name: "Marcus Hale",
    role: "Founder, Career Years",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    stars: 5,
    message:
      "Career Years needed a full-stack partner who could handle NestJS, realtime scoring, and admin tooling. Hassan shipped reliably and left the codebase in a shape the rest of the team could extend.",
  },
  {
    name: "Daniel Brooks",
    role: "Engineering Manager, Expert One",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
    message:
      "On Expert One he delivered a clean Next.js frontend with search and state that held up under real traffic. Clear communication, solid architecture instincts, and zero drama around deadlines.",
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

const ReviewCard = ({ review }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={review.avatar}
            alt={review.name}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "1rem", fontWeight: 600 }}
            >
              {review.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 0.5 }}
            >
              {review.role}
            </Typography>
            <StarRating rating={review.stars} />
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          "{review.message}"
        </Typography>
      </CardContent>
    </Card>
  );
};

const Reviews = () => {
  return (
    <div className="w-full bg-white md:px-10 px-5 flex flex-col gap-10 pt-5 pb-12">
      <h1 className="font-neue_montreal text-3xl tracking-wide opacity-85 uppercase">
        Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clientReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

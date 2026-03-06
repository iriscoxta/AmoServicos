import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
}

const StarRating = ({ rating, maxStars = 5, size = 16, showValue = true, reviewCount }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const filled = i < Math.floor(rating);
          const half = i === Math.floor(rating) && rating % 1 >= 0.5;
          return (
            <Star
              key={i}
              size={size}
              className={
                filled ? 'text-warning fill-warning' :
                half ? 'text-warning fill-warning/50' :
                'text-muted-foreground/30'
              }
            />
          );
        })}
      </div>
      {showValue && <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      )}
    </div>
  );
};

export default StarRating;

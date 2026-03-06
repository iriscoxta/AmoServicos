import { Skeleton } from '@/components/ui/skeleton';

export const ProfessionalCardSkeleton = () => (
  <div className="bg-card rounded-lg border p-5">
    <div className="flex gap-4">
      <Skeleton className="w-14 h-14 rounded-full shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </div>
  </div>
);

export const CategoryCardSkeleton = () => (
  <div className="flex flex-col items-center gap-3 p-5 rounded-lg border">
    <Skeleton className="w-12 h-12 rounded-lg" />
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-3 w-16" />
  </div>
);

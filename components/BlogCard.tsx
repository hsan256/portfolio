import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiFillEye, AiOutlineFieldTime } from "react-icons/ai";

interface Props {
  id: string;
  title: string;
  image: string;
  views: number;
  originalLink: string;
  author: string;
  publishedDate: string;
  excerpt: string;
}

function formatViewCount(count: number) {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + "M";
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
}

const BlogCard = ({
  id,
  title,
  image,
  views,
  originalLink,
  author,
  publishedDate,
  excerpt,
}: Props) => {
  return (
    <Card className="shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-full max-w-[400px] rounded-xl border border-black-400 bg-black-200/80 p-3 mb-5">
      <Link href={originalLink} target="_blank">
        <div className="relative h-44 rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="rounded-md object-cover"
            layout="fill"
          />
        </div>
      </Link>

      <CardContent className="flex flex-col space-y-1.5 p-0 mt-4">
        <Link href={originalLink} target="_blank">
          <h3 className="text-2xl font-semibold leading-none tracking-tight body-semibold line-clamp-2 w-full pt-2 text-left text-white">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-white-500 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5">
            <Image src="/view.svg" width={28} height={28} alt="views" />
            <span className="text-gray-400">{formatViewCount(views)} +</span>
          </div>

          <Link
            href={originalLink}
            target="_blank"
            className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
          >
            Read More
            <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

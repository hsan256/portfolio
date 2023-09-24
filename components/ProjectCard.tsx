import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
  title: string;
  image: string;
  views: number;
  githubLink: string;
  liveLink: string;
  videoLink: string;
}

const ProjectCard = ({
  id,
  title,
  image,
  views,
  githubLink,
  liveLink,
  videoLink,
}: Props) => {
  const mainLink = liveLink || videoLink;

  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={githubLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-2 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        {/* <div className="flex-center body-medium gap-1.5 text-white">
          <Image 
            src="/view.svg" width={28} height={28} alt="views"
          />
          {views}
        </div> */}
        {mainLink ? (
          <Link
            href={mainLink}
            target="_blank"
            className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
          >
            {liveLink ? (
              <>
                <Image src="/view.svg" width={28} height={28} alt="live" />
                Live Link
              </>
            ) : (
              <>
                <Image src="/view.svg" width={28} height={28} alt="video" />
                Video Link
              </>
            )}
          </Link>
        ) : (
          <div className="flex-center text-gray-400 body-semibold gap-1.5">
            Not deployed
          </div>
        )}

        <Link
          href={githubLink}
          target="_blank"
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          <Image src="/github-blue.svg" width={20} height={20} alt="views" />
          Github Link
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

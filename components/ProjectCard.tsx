import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  id: string;
  title: string;
  image: string;
  views: number;
  githubLink: string;
}

const ProjectCard = ({ id, title, image, views, githubLink }: Props) => {
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
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image 
            src="/view.svg" width={28} height={28} alt="views"
          />
          {views}
        </div>
        <Link href={githubLink} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
          <Image 
            src="/github-blue.svg" width={20} height={20} alt="views"
          />
          Github Link
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
        {/* <div class="text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-full rounded-[10px] border border-black-400 bg-black-200/80 p-3 shadow-video-card sm:w-[410px] sm:p-5">
        <div class="flex flex-col space-y-1.5 p-0">
          <div class="relative h-[170px] w-full rounded-md xs:h-[265px] sm:h-[210px]"><img alt="video image" loading="lazy" decoding="async" data-nimg="fill" class="rounded-md object-cover" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx22npxvj%2Fproduction%2F96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png&amp;w=3840&amp;q=75" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
          <h3 class="text-2xl font-semibold leading-none tracking-tight body-semibold line-clamp-2 w-full pt-5 text-left text-white">Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 2/2]</h3></div>
        <div class="mt-4 flex items-center justify-between gap-3 p-0">
          <p class="body-medium capitalize text-white-500">fullstack</p>
          <div class="flex-center text-gradient_purple-blue body-semibold gap-1.5 ">Watch Now<img alt="arrow" loading="lazy" width="13" height="0" decoding="async" data-nimg="1" src="/assets/resources/icons/arrow-blue.svg" style="color: transparent;"></div>
        </div>
      </div> */}
      </CardContent>
    </Card>
  )
}

export default ProjectCard
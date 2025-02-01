import Link, { LinkProps } from "next/link";

interface CardPostProps extends LinkProps {
  title: string;
  summary: string;
}
export function CardPost({ title, summary, ...rest }: CardPostProps) {
  return (
    <Link {...rest}>
      <div className='h-full hover:shadow-lg transition-shadow border-1 rounded px-3 py-2'>
        <h2 className="text-lg font-bold">{title}</h2>
        <span>
          {summary}
        </span>
      </div>
    </Link>
  )
}
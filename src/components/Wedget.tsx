export function Wedget({ title, size }: { title: string, size: string }) {

    const sizes = {
        'sm': 'text-sm',
        'xs': 'text-xs',
        'mini': 'text-[8px]'
    }

    return (
        <div className={`border border-primary rounded-full flex items-center justify-center w-fit ${size === 'mini' ? 'px-2 py-1' : 'px-4 py-2'} ${sizes[size]}`}>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary tracking-wider">{title}</span>
        </div>
    );
}
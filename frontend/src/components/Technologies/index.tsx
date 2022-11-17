import Technology from '@/components/Technologies/Technology';

export default function Technologies({technologies}) {
    return (
        <div>
            {
                technologies.map(tech =>
                    <Technology/>
                )
            }
        </div>
    )
}
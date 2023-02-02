import Technology from '@/components/Technologies/Technology';
import Category from '@/components/Technologies/Category';

export default function Technologies({technologies}) {
    return (
        <section id="technologies"
             className="relative min-h-[calc(100vh)]
             {/*bg-[url('/bg04.png')]*/}
             {/*dark:bg-[url('/bg04-30opac.png')]*/}
             bg-gray050
             dark:bg-gray850
             ">
            <div className="section-container">
                <h2>Technologies used</h2>
                <>
                    {technologies?.data
                        ?.sort((a, b) => a.attributes.Priority - b.attributes.Priority)
                        .map(categ =>
                            <Category
                                key={categ.id}
                                categ={categ}/>
                            )}
                </>
            </div>
        </section>
    )
}
import resources from "../assets/ressurser.js";

export default function Resorces({category}) {
    const resourceData= resources.filter((resource) => resource.category === category);

    return(
        <section>
            <h1>{category.toUpperCase()}</h1>
            <ul>
                {filteredResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url} target="_blank">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
const TutorialCategory=(tutorial, key)=>{
    tutorial = tutorial.tutorial
    return(
        <div className="wrapper--tut-category">
            <section className="tut-category">
                <p className="tut-category__title">{tutorial.title}</p>
                <section>
                    <p>{tutorial.level}</p>
                    <p>{tutorial.type}</p>
                </section>
            </section>
        </div>
    )
}
export default TutorialCategory;
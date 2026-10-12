const steps = [
  {
    n: '01 · brew',
    title: 'we start with coffee that actually wakes you up.',
    desc: 'smooth cups poured every morning from 5 am on discovery road.'
  },
  {
    n: '02 · cook',
    title: 'homemade meals, made fresh for the lunch rush.',
    desc: 'breakfasts, burgers, hot packs and focaccias — generous and fast.'
  },
  {
    n: '03 · build',
    title: 'make-your-own sandwiches, exactly how you like them.',
    desc: 'pick your fillings, sauces and sides. we don’t judge.'
  },
  {
    n: '04 · serve',
    title: 'friendly faces who remember your order.',
    desc: 'eat in, take away, or order online for pickup and delivery.'
  }
];

export default function Process() {
  return (
    <section className="dlProcess" aria-labelledby="process-title">
      <div className="dlShell">
        <div className="dlProcessHead">
          <h2 id="process-title">
            <span className="dlHeadLine">from first coffee to a full plate</span>
            <span className="dlHeadLine">in four small steps.</span>
          </h2>
        </div>
        <div className="dlProcessGrid">
          {steps.map(step => (
            <article className="dlStep" key={step.n}>
              <small>{step.n}</small>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

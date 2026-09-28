import './Learning.css';

const LEARNING_ITEMS = [
  {
    id: 'wordpress',
    icon: '📝',
    title: 'WordPress',
    status: 'Currently Exploring',
    statusColor: 'amber',
    points: [
      'Basics of website creation using WordPress',
      'Choosing and customising themes',
      'Creating and organising pages',
      'Installing and configuring plugins',
      'Understanding menus and navigation',
    ],
    note: 'Learning / Exploring — Not professional experience.',
  },
  {
    id: 'shopify',
    icon: '🛍️',
    title: 'Shopify',
    status: 'Currently Exploring',
    statusColor: 'amber',
    points: [
      'Basic storefront structure',
      'Adding products and collections',
      'Understanding Shopify themes',
      'Store navigation and menus',
    ],
    note: 'Learning / Exploring — Not professional experience.',
  },
];

function LearningCard({ item }) {
  return (
    <article className="learning-card card" aria-label={item.title}>
      <div className="learning-card__header">
        <span className="learning-card__icon" aria-hidden="true">{item.icon}</span>
        <div>
          <h3 className="learning-card__title">{item.title}</h3>
          <span className="learning-card__status">
            <span className={`status-dot status-dot--${item.statusColor}`} aria-hidden="true"></span>
            {item.status}
          </span>
        </div>
      </div>

      <ul className="learning-card__points" aria-label={`What I am learning about ${item.title}`}>
        {item.points.map(point => (
          <li key={point}>
            <span aria-hidden="true">→</span>
            {point}
          </li>
        ))}
      </ul>

      <p className="learning-card__note">{item.note}</p>
    </article>
  );
}

export default function Learning() {
  return (
    <section id="learning" className="section section--alt learning" aria-labelledby="learning-heading">
      <div className="container">
        <div className="section__header section__header--center">
          <span className="section__eyebrow">Currently Exploring</span>
          <h2 className="section__title" id="learning-heading">What I&apos;m Learning</h2>
          <p className="section__subtitle">
            Alongside my core skills, I am exploring these tools and platforms on my own.
            These are learning areas, not professional experience.
          </p>
        </div>

        <div className="learning__grid">
          {LEARNING_ITEMS.map(item => (
            <LearningCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

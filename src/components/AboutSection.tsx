import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 md:p-12" style={{backgroundColor: '#F5F5F8'}}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-sf text-muted-foreground uppercase tracking-wider">
                O nás
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
                Jsme tým kreativních profesionálů
              </h2>
            </div>
            
            <p className="text-base font-sf text-muted-foreground leading-relaxed">
              S více než 10 lety zkušeností v oblasti digitálního marketingu a brandingu pomáháme značkám růst a dosahovat jejich cílů. Specializujeme se na vytváření autentických brandových zážitků, které rezonují s vaší cílovou skupinou.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-96 rounded-2xl flex items-center justify-center" style={{backgroundColor: '#F5F5F8'}}>
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 bg-muted-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm">Vaše fotka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
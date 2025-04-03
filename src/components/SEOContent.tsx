
import React from 'react';

const SEOContent = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-0" id="about">
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Understanding Employee Turnover Costs</h2>
          <p className="text-charcoal mb-4">
            Employee turnover is a significant challenge for businesses across India and globally. 
            When talented employees leave, organizations face both direct and indirect costs that can substantially 
            impact the bottom line. Our Employee Turnover Cost Calculator helps you quantify these expenses and 
            understand the financial benefits of improved retention strategies.
          </p>
          <p className="text-charcoal mb-4">
            According to industry research, the total cost of replacing an employee can range from 50% to 200% of their 
            annual salary, depending on their role, seniority, and specialization. For Indian businesses, especially 
            in competitive sectors like IT, healthcare, and financial services, these costs can significantly impact 
            profitability and growth.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Key Components of Turnover Costs</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-medium">1. Recruitment Expenses</h3>
              <p className="text-charcoal">
                These include advertising positions, agency fees, employee referral bonuses, and the time HR staff spend 
                screening, interviewing, and processing new hires. For specialized roles in India's tech hubs like 
                Bangalore, Delhi NCR or Hyderabad, recruitment costs can be substantial.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">2. Training and Onboarding</h3>
              <p className="text-charcoal">
                New employees require formal training, mentoring, and time to reach full productivity. This includes 
                direct training costs, materials, and the time spent by managers and colleagues helping new hires 
                assimilate into the organization.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">3. Lost Productivity</h3>
              <p className="text-charcoal">
                There's typically a productivity gap between when an employee leaves and when their replacement reaches 
                full efficiency. During this period, teams may experience reduced output, quality issues, or missed 
                opportunities. For Indian companies in the midst of digital transformation, this productivity loss can 
                be particularly costly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">4. Administrative Costs</h3>
              <p className="text-charcoal">
                Processing departures, conducting exit interviews, and managing transitions require administrative time 
                and resources. These costs often go unmeasured but contribute significantly to the overall impact of 
                turnover.
              </p>
            </div>
          </div>
        </section>
        
        <section id="guide">
          <h2 className="text-2xl font-bold text-primary mb-4">How to Use This Calculator</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <span className="font-medium">Enter your organization size</span> - The total number of employees in your company
            </li>
            <li>
              <span className="font-medium">Input your annual turnover rate</span> - If you don't know this figure, 
              divide the number of employees who left in the past year by your average total headcount, then multiply by 100
            </li>
            <li>
              <span className="font-medium">Provide the average annual salary</span> - Use the average annual compensation 
              across your organization or for the specific departments you're analyzing
            </li>
            <li>
              <span className="font-medium">Review the results</span> - The calculator will show detailed cost breakdowns 
              and potential savings from improved retention
            </li>
            <li>
              <span className="font-medium">Download or email the report</span> - Share these insights with stakeholders to 
              build support for retention initiatives
            </li>
          </ol>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">The Business Case for Retention</h2>
          <p className="text-charcoal mb-4">
            Investing in employee retention delivers a compelling return on investment. By reducing turnover by just 
            5%, organizations can realize significant cost savings that can be redirected toward growth initiatives, 
            employee development, or improved benefits.
          </p>
          <p className="text-charcoal mb-4">
            For Indian businesses navigating talent shortages, especially in high-demand sectors like technology, 
            healthcare, and financial services, retention strategies are more important than ever. Our calculator 
            helps quantify the business case for these investments.
          </p>
          <p className="text-charcoal mb-4">
            Effective retention strategies for Indian organizations include competitive compensation packages, 
            career development opportunities, flexible work arrangements, recognition programs, and building a 
            positive work culture that values employee wellbeing and work-life balance.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Going Beyond the Numbers</h2>
          <p className="text-charcoal">
            While financial calculations are important, turnover also has intangible impacts like decreased morale, 
            lost institutional knowledge, disrupted team dynamics, and potential damage to customer relationships. 
            These factors, though harder to quantify, underscore the importance of viewing retention as a strategic 
            priority rather than just a cost center.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SEOContent;

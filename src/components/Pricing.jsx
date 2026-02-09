import { Check } from 'lucide-react';
const plans = [
    {
        name: "Technical",
        description: "I have project experience in the following",
        features: [
            "JavaScript",
            "R",
            "Python",
            "Java",
            "C++",
            "html",
            "CSS",
            "Vite",
            "UNIX",
            "SQL",
            "matlab",
            "PHP",
            "Laravel",
        ],
        mostPopular: false,
    },
    {
        name: "Tangible",
        description: "I've studied and practiced the following",
        features: [
            "Machine Learning",
            "Statistics",
            "Statistical Analysis",
            "Data Analysis",
            "Data collection",
            "Data Cleaning",
            "Database Management",
            "Big Data Management",
            "Object Oriented Programming",
            "Functional Programming",
        ],
        mostPopular: false,
    },
    {
        name: "Intangibles",
        description: "People know me as the following",
        features: [
            "Mentor",
            "Team Leader",
            "Team player",
            "Communicative",
            "Punctual",
            "Listening",
            "Questioning",
            "Empathy",
            "Patient",
            "Creative",
            "Logical",
        ],
        mostPopular: false,
    },
];

export default function Pricing() {
    return (
        <section
            id= "my skills"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
        >
            <div>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        My
                    </span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Skills
                    </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => (
                        <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                            plan.mostPopular 
                                ? "border-blue-500 shadow-2xl-blue-500/20 lg:scale-105" 
                                : "border-slate-800 hover:border-slate-700"
                            }`}
                        >
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                                
                            </div>
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                {plan.features.map((feature, featurekey) => (
                                    <li key={featurekey} className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                            <Check className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400'/>
                                        </div>
                                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Target, Cog, BookOpen, TrendingUp, Brain, Layers, Zap } from 'lucide-react';

const TeleperformanceAIPitch = () => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [expandedUseCase, setExpandedUseCase] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'agentic', 'hybrid', 'traditional'

  const departments = [
    { id: 'all', name: 'All Solutions', color: 'bg-slate-700' },
    { id: 'customer-service', name: 'Customer Service Operations', color: 'bg-blue-600' },
    { id: 'compliance', name: 'Quality & Compliance', color: 'bg-teal-600' },
    { id: 'sales', name: 'Sales & Marketing', color: 'bg-blue-700' },
    { id: 'operations', name: 'Back-Office & Operations', color: 'bg-teal-700' },
    { id: 'security', name: 'Security & Risk', color: 'bg-blue-800' }
  ];

  const aiTypes = {
    agentic: { label: 'True Agentic AI', color: 'bg-purple-600', icon: Brain, description: 'Autonomous agents that plan, execute, and learn' },
    hybrid: { label: 'Hybrid AI', color: 'bg-indigo-600', icon: Layers, description: 'Combines agentic, RAG, and ML capabilities' },
    traditional: { label: 'AI Foundation', color: 'bg-cyan-600', icon: Zap, description: 'ML/NLP capabilities that enable other solutions' }
  };

  const useCases = [
    {
      id: 1,
      department: 'customer-service',
      aiType: 'hybrid',
      title: 'Intelligent Agent Assist System',
      challenge: "Call-centre teams handle 10,000+ daily interactions with complex, multi-channel inquiries. Current tools provide static scripts and manual knowledge base searches, leading to 7-minute average handle times and 30% escalation rates. Agents struggle to access relevant information quickly while maintaining conversation flow.",
      plan: "The system combines RAG for knowledge retrieval with agentic decision-making for guidance strategy. It analyzes customer profile, sentiment, and conversation context to determine optimal assistance approach. The agent reasons through multiple solution paths and selects the most appropriate based on success probability.",
      execute: "During conversations, the system performs real-time retrieval from knowledge bases while autonomously deciding what information to surface and when. It uses chain-of-thought reasoning to formulate multi-step solutions, monitors sentiment to adjust approach, and generates compliant responses. The system autonomously creates tickets, routes tasks, and learns from agent feedback.",
      learn: "Reinforcement learning from agent acceptance/rejection of suggestions improves recommendation quality. The system identifies knowledge gaps, updates retrieval priorities, and adapts to individual agent styles. Success metrics (resolution rate, handle time) continuously refine the decision model.",
      outcomes: [
        "25% reduction in handle time through intelligent information surfacing",
        "40% decrease in escalations via proactive complex issue guidance",
        "90% improvement in knowledge base utilization",
        "35% increase in cross-sell conversion through opportunity identification"
      ],
      technicalDetails: "RAG-enhanced retrieval with GPT-4 reasoning, reinforcement learning from human feedback (RLHF), real-time sentiment analysis"
    },
    {
      id: 2,
      department: 'customer-service',
      aiType: 'agentic',
      title: 'Autonomous Customer Service Agent',
      challenge: "Customers demand 24/7 instant resolution for complex multi-step processes like returns, refunds, and account modifications. Traditional chatbots fail at 70% of queries requiring reasoning or multiple system interactions, forcing expensive human escalations.",
      plan: "The autonomous agent maintains conversation state, understands complex intent chains, and plans multi-step workflows. It determines required permissions, identifies necessary system integrations, and creates execution strategies for achieving customer goals while maintaining compliance.",
      execute: "The agent autonomously navigates multiple backend systems, executing complex workflows like processing returns (check eligibility → calculate refund → initiate payment → update inventory → send confirmation). It makes real-time decisions on escalation based on confidence scores and complexity assessment. The agent can spawn sub-tasks, coordinate with other systems, and handle exceptions autonomously.",
      learn: "Through reinforcement learning, the agent optimizes conversation paths, learns new resolution strategies from successful human interventions, and continuously improves its decision boundaries for escalation. It identifies patterns in failed interactions to expand its capability set.",
      outcomes: [
        "60% of complex queries resolved without human intervention",
        "80% cost reduction per interaction for automated cases",
        "24/7 availability with consistent quality",
        "3x faster resolution for multi-step processes"
      ],
      technicalDetails: "Multi-agent architecture with specialized sub-agents, tool use via API orchestration, Monte Carlo tree search for planning"
    },
    {
      id: 3,
      department: 'compliance',
      aiType: 'traditional',
      title: 'AI-Powered Compliance Monitoring System',
      challenge: "Manual quality assurance covers only 2% of interactions, missing critical compliance violations. Static rule-based systems generate 40% false positives and cannot adapt to evolving regulations or detect nuanced violations in natural conversation.",
      plan: "The system uses advanced NLP for comprehensive conversation analysis, with ML models trained on regulatory requirements and company policies. It employs ensemble methods for high-accuracy violation detection.",
      execute: "Real-time transcription and analysis of all interactions, with sophisticated pattern matching for required disclosures and prohibited phrases. The system uses contextual understanding to reduce false positives and provides instant alerts for critical violations. Automated scoring and categorization streamline supervisor review.",
      learn: "Supervised learning from QA feedback continuously improves accuracy. The system adapts to new regulations through updated training data and identifies emerging compliance risks through anomaly detection.",
      outcomes: [
        "100% conversation coverage vs 2% manual sampling",
        "70% reduction in false positives through contextual understanding",
        "95% accuracy in violation detection",
        "50% reduction in compliance team workload"
      ],
      technicalDetails: "Transformer-based NLP models, ensemble classification, active learning from QA feedback"
    },
    {
      id: 4,
      department: 'customer-service',
      aiType: 'traditional',
      title: 'Multilingual AI Translation Layer',
      challenge: "Supporting 137 languages requires massive translator teams, with €50M annual cost. Human translation adds 30-second delays, while accuracy varies by translator skill. Accents and dialects create additional barriers, reducing customer satisfaction by 25% in non-primary languages.",
      plan: "Deploy state-of-the-art neural machine translation with custom models for industry terminology. Implement real-time voice cloning and accent normalization to maintain natural conversation flow.",
      execute: "The system provides instantaneous bidirectional translation with context preservation across conversation turns. Voice synthesis maintains speaker characteristics while normalizing accents. Industry-specific terminology databases ensure accurate technical translation. All processing occurs with sub-200ms latency.",
      learn: "Continuous model improvement through translation feedback, expanding coverage for regional dialects and industry jargon. The system adapts to conversation patterns and frequently used phrases.",
      outcomes: [
        "90% reduction in translation costs",
        "Universal language support without scaling human translators",
        "200ms translation latency vs 30-second human delay",
        "35% improvement in non-English customer satisfaction"
      ],
      technicalDetails: "Custom fine-tuned translation models, neural voice synthesis, edge deployment for low latency"
    },
    {
      id: 5,
      department: 'sales',
      aiType: 'hybrid',
      title: 'Intelligent Revenue Optimization Agent',
      challenge: "Agents miss 65% of cross-sell opportunities due to lack of real-time insights. Static recommendation engines have 15% acceptance rates. Manual analysis of customer data during calls is impossible, leaving €100M annual revenue on the table.",
      plan: "The agent combines predictive analytics with autonomous decision-making for offer strategy. It performs real-time analysis of customer lifetime value, propensity models, and competitive intelligence to identify optimal moments and offers. The system reasons through multiple offer combinations to maximize both acceptance probability and revenue.",
      execute: "During interactions, the agent autonomously decides when and what to offer based on conversation sentiment, customer signals, and business rules. It adjusts strategy in real-time—if detecting resistance, it pivots to retention or defers to follow-up. The agent can negotiate within defined parameters, bundling products and adjusting terms to close deals.",
      learn: "Reinforcement learning from offer outcomes optimizes timing and selection. The agent learns individual customer preferences, seasonal patterns, and effective negotiation tactics. A/B testing of strategies continuously improves performance.",
      outcomes: [
        "35% increase in cross-sell conversion",
        "€25M additional annual revenue",
        "50% improvement in offer relevance",
        "20% increase in average order value through intelligent bundling"
      ],
      technicalDetails: "Real-time propensity modeling, multi-armed bandit optimization, RAG for competitive intelligence"
    },
    {
      id: 6,
      department: 'sales',
      aiType: 'agentic',
      title: 'Autonomous Campaign Orchestration Agent',
      challenge: "Managing 10,000+ leads across 6 channels requires 50 FTEs for basic follow-up. Manual campaign management results in 72-hour response delays, 60% of leads going cold, and no personalization at scale. Traditional marketing automation lacks intelligence to adapt strategies.",
      plan: "The autonomous agent creates personalized engagement strategies for each lead, selecting optimal channels, timing, and messaging. It maintains complete context across all touchpoints, reasons through engagement patterns, and dynamically adjusts campaign strategy based on response patterns.",
      execute: "The agent autonomously orchestrates multi-touch campaigns—sending personalized emails, scheduling SMS, initiating callbacks, and posting social touches. It makes real-time decisions on campaign flow: accelerating for hot leads, nurturing cold ones, and re-engaging dormant prospects. The agent autonomously allocates budget across channels based on ROI, adjusts messaging based on engagement, and coordinates with sales teams for handoffs.",
      learn: "Through continuous experimentation, the agent optimizes channel mix, message templates, and timing. It learns industry-specific patterns, seasonal trends, and individual prospect behaviors. The system autonomously identifies new campaign strategies through successful pattern analysis.",
      outcomes: [
        "300% increase in qualified lead conversion",
        "80% reduction in manual campaign management effort",
        "24-hour to 30-minute average response time",
        "45% improvement in marketing ROI through intelligent budget allocation"
      ],
      technicalDetails: "Multi-agent orchestration, automated A/B testing, causal inference for strategy optimization"
    },
    {
      id: 7,
      department: 'operations',
      aiType: 'agentic',
      title: 'Autonomous Process Automation Agent',
      challenge: "Back-office processes involve 500+ FTEs handling invoices, collections, payroll, and reporting. Manual processing causes 5-day delays, 3% error rates, and €2M annual compliance penalties. Current RPA solutions break with any process change.",
      plan: "The agent learns existing workflows through observation, identifies optimization opportunities, and autonomously designs improved processes. It understands business logic, compliance requirements, and exception handling rules to create robust automation strategies.",
      execute: "The agent autonomously handles end-to-end processes: extracting data from documents (even unstructured ones), validating against business rules, making decisions on exceptions, routing for approvals, and executing transactions. It spawns specialized sub-agents for parallel processing, coordinates across systems, and handles errors through intelligent retry and escalation logic. The agent can autonomously modify its workflow when detecting patterns of exceptions.",
      learn: "The agent continuously analyzes process performance, identifies bottlenecks, and autonomously implements optimizations. It learns from exception patterns to reduce future errors and adapts to policy changes without reprogramming. The system can even suggest and implement new workflows based on observed inefficiencies.",
      outcomes: [
        "75% reduction in processing time",
        "99.5% accuracy (from 97%)",
        "€1.5M annual penalty avoidance",
        "60% FTE reduction with redeployment to higher-value work"
      ],
      technicalDetails: "Process mining with autonomous optimization, computer vision for document processing, multi-agent coordination"
    },
    {
      id: 8,
      department: 'operations',
      aiType: 'hybrid',
      title: 'Intelligent Workforce Optimization System',
      challenge: "Managing 50,000 global agents across time zones with volatile demand patterns. Current scheduling has 25% over/under-staffing, costing €30M annually. Recruitment takes 45 days with 40% early attrition due to poor fit assessment.",
      plan: "The system combines ML forecasting with agentic scheduling optimization. It predicts demand patterns, analyzes skill requirements, and autonomously creates optimal schedules while considering agent preferences and regulations.",
      execute: "For recruitment, ML models screen resumes and predict candidate success. The agentic component autonomously schedules interviews, coordinates with hiring managers, and optimizes offer parameters. For scheduling, it dynamically adjusts staffing based on real-time demand, autonomously approving shift swaps and managing coverage gaps.",
      learn: "The system learns demand patterns, improves candidate assessment through outcome tracking, and optimizes scheduling strategies based on performance metrics. It adapts to seasonal patterns and unexpected events.",
      outcomes: [
        "30% reduction in recruitment time",
        "50% decrease in early attrition",
        "95% optimal staffing levels (from 75%)",
        "€20M annual cost savings"
      ],
      technicalDetails: "Time-series forecasting, genetic algorithms for scheduling, predictive candidate scoring"
    },
    {
      id: 9,
      department: 'sales',
      aiType: 'agentic',
      title: 'Autonomous Customer Success Agent',
      challenge: "Managing 100,000 customer journeys with 20% annual churn costs €200M in lost revenue. Human teams can only proactively engage 5% of at-risk accounts. Traditional predictive models identify churn risk but cannot act on it effectively.",
      plan: "The autonomous agent maintains state for each customer journey, continuously assessing health scores and churn probability. It reasons through intervention strategies, considering customer value, intervention cost, and success probability to create personalized retention plans.",
      execute: "The agent autonomously executes retention strategies: sending personalized communications, offering targeted incentives, scheduling check-ins, and escalating to human agents when needed. It coordinates across touchpoints, ensuring consistent engagement without overwhelming customers. The agent can negotiate retention offers within defined parameters, adjusting based on customer response and lifetime value calculations.",
      learn: "Through reinforcement learning on retention outcomes, the agent optimizes intervention timing, offer structures, and communication strategies. It learns segment-specific patterns, seasonal factors, and early warning signals. The system autonomously discovers new retention strategies through successful pattern analysis.",
      outcomes: [
        "40% reduction in churn rate",
        "€80M annual revenue retention",
        "10x increase in proactive engagement coverage",
        "60% success rate on retention interventions"
      ],
      technicalDetails: "Multi-agent system for journey orchestration, reinforcement learning for strategy optimization, causal modeling"
    },
    {
      id: 10,
      department: 'security',
      aiType: 'traditional',
      title: 'AI-Enhanced Fraud Detection System',
      challenge: "Processing 1M daily transactions with 0.1% fraud rate costing €50M annually. Rule-based systems have 30% false positive rates, frustrating legitimate customers. Fraudsters adapt quickly to static rules, requiring constant manual updates.",
      plan: "Deploy ensemble ML models for anomaly detection, combining supervised learning on known fraud patterns with unsupervised learning for novel threat detection. Implement graph neural networks for relationship analysis.",
      execute: "Real-time scoring of all transactions with millisecond latency. The system analyzes patterns across multiple dimensions: behavioral, temporal, network, and device. Dynamic risk scoring adjusts authentication requirements—streamlining for low-risk, adding friction for high-risk. Automatic case creation with evidence compilation for investigation.",
      learn: "Continuous model retraining on confirmed fraud cases improves detection accuracy. The system adapts to new fraud patterns through anomaly detection and learns from false positives to reduce customer friction.",
      outcomes: [
        "50% reduction in fraud losses",
        "60% decrease in false positives",
        "100ms decision latency",
        "80% reduction in manual review workload"
      ],
      technicalDetails: "Ensemble methods with XGBoost and neural networks, graph analysis for fraud rings, online learning"
    }
  ];

  const filteredUseCases = useCases.filter(uc => {
    const deptMatch = selectedDept === 'all' || uc.department === selectedDept;
    const typeMatch = viewMode === 'all' || uc.aiType === viewMode;
    return deptMatch && typeMatch;
  });

  const getDeptColor = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    return dept?.color || 'bg-slate-600';
  };

  const getAITypeInfo = (aiType) => {
    return aiTypes[aiType] || aiTypes.traditional;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold">The Journey to Autonomous Operations</h1>
            <div className="text-right">
              <div className="text-sm opacity-90">Prepared by</div>
              <div className="text-xl font-semibold">TYNYBAY</div>
            </div>
          </div>
          <h2 className="text-2xl font-light mb-2">AI Solutions Portfolio for Teleperformance</h2>
          <p className="text-lg opacity-90 max-w-3xl">
            From AI foundations to fully autonomous agents—a comprehensive roadmap for transforming every aspect of your operations with the right AI approach for each challenge.
          </p>
        </div>
      </div>

      {/* AI Type Filter */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm font-medium text-slate-600">View by AI Type:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'all' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                All Types ({useCases.length})
              </button>
              {Object.entries(aiTypes).map(([key, type]) => {
                const Icon = type.icon;
                const count = useCases.filter(uc => uc.aiType === key).length;
                return (
                  <button
                    key={key}
                    onClick={() => setViewMode(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      viewMode === key ? `${type.color} text-white` : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {type.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
          {viewMode !== 'all' && (
            <div className="text-sm text-slate-600 italic ml-24">
              {aiTypes[viewMode].description}
            </div>
          )}
        </div>
      </div>

      {/* Department Filter */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => {
                  setSelectedDept(dept.id);
                  setExpandedUseCase(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDept === dept.id
                    ? `${dept.color} text-white shadow-lg`
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {dept.name}
                {dept.id !== 'all' && (
                  <span className="ml-2 opacity-75">
                    ({useCases.filter(uc => uc.department === dept.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {filteredUseCases.map(useCase => {
            const aiTypeInfo = getAITypeInfo(useCase.aiType);
            const AIIcon = aiTypeInfo.icon;
            
            return (
              <div
                key={useCase.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                {/* Use Case Header */}
                <button
                  onClick={() => setExpandedUseCase(expandedUseCase === useCase.id ? null : useCase.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${getDeptColor(useCase.department)} flex items-center justify-center text-white font-bold`}>
                      {useCase.id}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-800">{useCase.title}</h3>
                        <div className={`px-2 py-1 rounded-full ${aiTypeInfo.color} bg-opacity-10 flex items-center gap-1`}>
                          <AIIcon className={`w-4 h-4 ${aiTypeInfo.color.replace('bg-', 'text-')}`} />
                          <span className={`text-xs font-medium ${aiTypeInfo.color.replace('bg-', 'text-')}`}>
                            {aiTypeInfo.label}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {departments.find(d => d.id === useCase.department)?.name}
                      </div>
                    </div>
                  </div>
                  {expandedUseCase === useCase.id ? (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedUseCase === useCase.id && (
                  <div className="px-6 pb-6 space-y-6 border-t border-slate-100 pt-6">
                    {/* Challenge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-red-600" />
                        <h4 className="text-lg font-bold text-slate-800">The Business Challenge</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed pl-7">{useCase.challenge}</p>
                    </div>

                    {/* Solution Architecture */}
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Cog className="w-5 h-5 text-teal-600" />
                        {useCase.aiType === 'agentic' ? 'Autonomous Agent Architecture' : 
                         useCase.aiType === 'hybrid' ? 'Hybrid AI Solution' : 
                         'AI-Powered Approach'}
                      </h4>
                      
                      <div className="space-y-4">
                        {/* Plan */}
                        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                          <h5 className="font-bold text-blue-900 mb-2">
                            {useCase.aiType === 'agentic' ? '🧠 Reasoning & Planning' : '📋 System Design'}
                          </h5>
                          <p className="text-slate-700 text-sm leading-relaxed">{useCase.plan}</p>
                        </div>

                        {/* Execute */}
                        <div className="bg-white rounded-lg p-4 border-l-4 border-teal-500">
                          <h5 className="font-bold text-teal-900 mb-2">
                            {useCase.aiType === 'agentic' ? '🚀 Autonomous Execution' : '⚡ Implementation'}
                          </h5>
                          <p className="text-slate-700 text-sm leading-relaxed">{useCase.execute}</p>
                        </div>

                        {/* Learn */}
                        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                          <h5 className="font-bold text-purple-900 mb-2">
                            {useCase.aiType === 'agentic' ? '📈 Continuous Learning & Adaptation' : '🔄 Optimization'}
                          </h5>
                          <p className="text-slate-700 text-sm leading-relaxed">{useCase.learn}</p>
                        </div>
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-slate-600 mb-2">Technical Implementation</h4>
                      <p className="text-sm text-slate-600">{useCase.technicalDetails}</p>
                    </div>

                    {/* Business Outcomes */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h4 className="text-lg font-bold text-slate-800">Measurable Business Outcomes</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-7">
                        {useCase.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span className="text-slate-700 text-sm leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Implementation Roadmap */}
        {viewMode === 'all' && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Recommended Implementation Roadmap</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-32 font-bold text-cyan-600">Phase 1</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">AI Foundations (Months 1-3)</h4>
                  <p className="text-slate-600 mb-2">Deploy traditional ML/AI capabilities that provide immediate value and lay groundwork for advanced solutions.</p>
                  <div className="text-sm text-slate-500">
                    • Multilingual Translation Layer (#4)<br/>
                    • Compliance Monitoring System (#3)<br/>
                    • Fraud Detection System (#10)
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-32 font-bold text-indigo-600">Phase 2</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">Hybrid Intelligence (Months 4-8)</h4>
                  <p className="text-slate-600 mb-2">Implement human-AI collaboration systems that augment agent capabilities while maintaining oversight.</p>
                  <div className="text-sm text-slate-500">
                    • Intelligent Agent Assist (#1)<br/>
                    • Revenue Optimization (#5)<br/>
                    • Workforce Optimization (#8)
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-32 font-bold text-purple-600">Phase 3</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">Autonomous Operations (Months 9-12)</h4>
                  <p className="text-slate-600 mb-2">Deploy fully autonomous agents that can plan, execute, and learn independently.</p>
                  <div className="text-sm text-slate-500">
                    • Autonomous Customer Service (#2)<br/>
                    • Process Automation Agent (#7)<br/>
                    • Campaign Orchestration (#6)<br/>
                    • Customer Success Agent (#9)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">€350M+</div>
              <div className="text-sm text-slate-300 mt-2">Projected Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">60%</div>
              <div className="text-sm text-slate-300 mt-2">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-slate-300 mt-2">Autonomous Operations</div>
            </div>
          </div>
          
          <div className="text-center border-t border-slate-700 pt-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Begin Your AI Journey?</h3>
            <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
              TYNYBAY specializes in building production-ready AI solutions that deliver measurable business value. 
              From traditional ML foundations to fully autonomous agents, we ensure each solution is technically sound, 
              economically viable, and aligned with your operational goals.
            </p>
            <div className="text-sm text-slate-400 italic">
              "Build trust through technical honesty, win through genuine innovation."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeleperformanceAIPitch;
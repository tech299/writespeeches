import React, { useState, useEffect } from 'react';
import { AlertCircle, Book, MessageCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SpeechWritingGuide = () => {
  const [speechProgress, setSpeechProgress] = useState(0);
  const [showPurpose, setShowPurpose] = useState(false);
  const [hoveredClause, setHoveredClause] = useState(null);
  const [activeHighlight, setActiveHighlight] = useState(null);

  const bill = {
    title: "A Resolution to Suspend Turkey's Veto Power in NATO",
    clauses: [
      "WHEREAS, Turkey threatens to exploit their veto power;",
      "WHEREAS, It is hindering NATO's ethics and effectiveness;",
      "WHEREAS, There's been numerous examples of Turkey blocking NATO actions for leverage;",
      "WHEREAS, They haven't been held accountable for several abuses against the Kurdish people and being an untrustworthy ally;",
      "RESOLVED, That the Congress here assembled recommends the suspension of Turkey's VETO power."
    ]
  };

  const explanations = [
    "This clause accuses Turkey of using their veto power in NATO for self-serving purposes, rather than for the collective good of the alliance. It suggests that Turkey is willing to manipulate its position within NATO to achieve its own goals, potentially at the expense of the alliance's overall objectives.",
    "This clause highlights how Turkey's actions undermine the ethical and operational standards of NATO. It implies that Turkey's behavior is not only problematic on a moral level but also impacts NATO's ability to function effectively as a unified alliance.",
    "This section provides evidence of Turkey's repeated obstruction within NATO, using their veto to stall key decisions. It suggests a pattern of behavior where Turkey consistently uses its veto power as a bargaining chip, potentially compromising NATO's ability to respond quickly and decisively to international challenges.",
    "Here, Turkey's human rights abuses, particularly against the Kurdish population, are introduced as a significant issue that has gone unaddressed. This clause also labels Turkey as an 'untrustworthy ally,' suggesting that their actions both internally and within the alliance have eroded trust among NATO members.",
    "The bill concludes with a clear recommendation to suspend Turkey's veto power, arguing that this step will protect NATO's ability to act cohesively in the future. This resolution proposes a specific action to address the issues raised in the previous clauses, aiming to limit Turkey's ability to obstruct NATO's decision-making processes."
  ];

  const fullSpeech = `If you name any NATO policy, I can guarantee you Turkey has found a way to violate it. This is not a case of a few mistakes or misunderstandings—it's a pattern of deliberate defiance. Turkey is no longer a reliable ally but a rogue actor working against the very values NATO was built to defend. It's time we recognize the reality: Turkey no longer belongs in NATO.

At its heart, NATO is more than just a military alliance. It's a partnership built on shared values: democracy, collective defense, and a commitment to peace. But Turkey under President Erdogan has strayed far from these principles. Let's be clear—this is not just a shift in priorities, it's a total betrayal of the values we stand for.

Take democracy, for instance. The Washington Treaty, NATO's founding document, binds us to uphold democratic institutions. But under Erdogan's rule, Turkey has slid into authoritarianism. In 2023, the Economist Intelligence Unit ranked Turkey 103rd globally in democracy, calling it a "hybrid regime." In 2022, Freedom House labeled Turkey "Not Free," citing Erdogan's stranglehold on the press and his rigging of elections. How can we sit here and continue to claim we are a united alliance of democracies when one of our own members is actively dismantling democracy within its borders?

But democracy isn't the only value Turkey has thrown aside. Let's talk about collective defense—NATO's core principle. Turkey's reckless decision to buy Russia's S-400 missile system in 2019 wasn't just a breach of trust—it was a direct threat to NATO's security. According to the Atlantic Council, this move jeopardizes the entire alliance by making our shared defense systems vulnerable to Russia's prying eyes. Turkey isn't just undermining NATO's defense strategy; it's actively compromising our safety.

And it gets worse. In 2019, Turkey launched a military invasion of northern Syria without consulting NATO. This reckless action targeted Kurdish forces—our allies in the fight against ISIS—creating chaos and instability in the region. According to Human Rights Watch, Turkey's actions displaced over 200,000 civilians and fueled human rights abuses. How can Turkey claim to be a NATO ally when it's attacking the very people who fought alongside us against terrorism?

We've given Turkey chances to change. Over and over, they've made promises to NATO—promises to uphold democracy, promises to reconsider their alliance with Russia. And time and again, Turkey has broken those promises. After being warned about the risks of their S-400 deal, Turkey assured us it would realign with NATO's interests. Instead, they pushed forward, doubling down on their partnership with Russia. This is not the behavior of a trustworthy ally—it's the behavior of a nation that cannot be relied upon.

Turkey has had its chance. It's time we take a stand. By keeping Turkey in NATO, we aren't just compromising our security—we are compromising our principles. We cannot allow one member to tear apart what the rest of us work so hard to protect.

NATO is at a crossroads. Do we stand by our values or do we let them be eroded from within? Turkey has made its choice—it's time we make ours. Removing Turkey from NATO is not just the right decision; it's the necessary one. We need to protect this alliance and the values that bind us together, or risk losing everything we've built. The time for action is now.`;

  const speechHighlights = [
    {
      text: "Turkey is no longer a reliable ally but a rogue actor working against the very values NATO was built to defend.",
      explanation: "This phrase paints Turkey as not just a problematic member of NATO but as an entity working against the alliance's core values. By using the term 'rogue actor,' the speaker emphasizes that Turkey's actions are not just missteps, but deliberate moves that undermine NATO's foundation.",
      technique: "Strong language and framing"
    },
    {
      text: "Turkey under President Erdogan has strayed far from these principles.",
      explanation: "By directly pointing at Turkey's leadership under President Erdogan, the speaker personalizes the issue. This approach makes it clear that the problem lies with the current leadership, not necessarily with Turkey as a whole or its people.",
      technique: "Personalization of the issue"
    },
    {
      text: "How can we sit here and continue to claim we are a united alliance of democracies when one of our own members is actively dismantling democracy within its borders?",
      explanation: "This rhetorical question challenges the audience to confront the contradiction between NATO's stated values and Turkey's authoritarian behavior. It forces listeners to question the integrity of the alliance if it continues to include members that don't uphold its core principles.",
      technique: "Rhetorical question"
    },
    {
      text: "Turkey's reckless decision to buy Russia's S-400 missile system in 2019 wasn't just a breach of trust—it was a direct threat to NATO's security.",
      explanation: "This statement elevates Turkey's actions from a diplomatic disagreement to a security threat. By framing the purchase of Russia's S-400 as a 'direct threat,' the speaker emphasizes the severity of Turkey's actions and their potential consequences for the entire alliance.",
      technique: "Escalation of severity"
    },
    {
      text: "Turkey's actions displaced over 200,000 civilians and fueled human rights abuses.",
      explanation: "Here, the speaker uses specific statistics and mentions human rights abuses to appeal to the audience's emotions and moral sensibilities. By quantifying the human cost of Turkey's actions, the speaker makes the issue more tangible and urgent.",
      technique: "Use of statistics and emotional appeal"
    },
    {
      text: "By keeping Turkey in NATO, we aren't just compromising our security—we are compromising our principles.",
      explanation: "This sentence frames the debate as both a security issue and a matter of ethical integrity. It suggests that allowing Turkey to remain in NATO doesn't just pose practical risks, but also undermines the very values that the alliance stands for.",
      technique: "Dual framing (security and ethics)"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (speechProgress < 100) {
        setSpeechProgress(speechProgress + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [speechProgress]);

  const renderSpeechParagraph = (paragraph, index) => {
    const highlight = speechHighlights.find(h => paragraph.includes(h.text));
    if (highlight) {
      const parts = paragraph.split(highlight.text);
      return (
        <p key={index} className="mb-4">
          {parts[0]}
          <span 
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => setActiveHighlight(index)}
          >
            {highlight.text}
          </span>
          {parts[1]}
          {activeHighlight === index && (
            <Alert className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Rhetorical Analysis</AlertTitle>
              <AlertDescription>
                <p><strong>Technique:</strong> {highlight.technique}</p>
                <p>{highlight.explanation}</p>
              </AlertDescription>
            </Alert>
          )}
        </p>
      );
    }
    return <p key={index} className="mb-4">{paragraph}</p>;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Congressional Debate: Bill Analysis and Speech Writing Guide</h1>
      
      <Button onClick={() => setShowPurpose(!showPurpose)} className="mb-4">
        <Info className="mr-2" />
        {showPurpose ? "Hide" : "Show"} Guide Purpose
      </Button>

      {showPurpose && (
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Purpose of this Guide</AlertTitle>
          <AlertDescription>
            This interactive guide demonstrates how to analyze a sample bill and craft a compelling speech for Congressional Debate. Using a resolution about Turkey's role in NATO as an example, you'll learn techniques for bill interpretation and effective speech writing. The sample bill and speech provided here serve as models to illustrate best practices in Congressional Debate preparation, helping you develop critical thinking and persuasive speaking skills.
          </AlertDescription>
        </Alert>
      )}
      
      <Tabs defaultValue="bill-explanation" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bill-explanation"><Book className="mr-2" />Sample Bill & Interpretation</TabsTrigger>
          <TabsTrigger value="speech"><MessageCircle className="mr-2" />Model Speech Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bill-explanation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Sample Bill: {bill.title}</CardTitle>
                <CardDescription>Hover over clauses to see explanations</CardDescription>
              </CardHeader>
              <CardContent>
                {bill.clauses.map((clause, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p 
                          className={`mb-2 cursor-pointer ${hoveredClause === index ? 'bg-blue-100' : ''}`}
                          onMouseEnter={() => setHoveredClause(index)}
                          onMouseLeave={() => setHoveredClause(null)}
                        >
                          {clause}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{explanations[index]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bill Interpretation</CardTitle>
                <CardDescription>Understanding each clause</CardDescription>
              </CardHeader>
              <CardContent>
                {explanations.map((explanation, index) => (
                  <Alert key={index} className={`mb-4 ${hoveredClause === index ? 'bg-blue-100' : ''}`}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Clause {index + 1}</AlertTitle>
                    <AlertDescription>{explanation}</AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="speech">
          <Card>
            <CardHeader>
              <CardTitle>Model Speech Analysis</CardTitle>
              <CardDescription>This exemplary speech demonstrates effective argumentation and persuasive techniques in response to the bill about Turkey's NATO membership. Study its structure and rhetoric to improve your own speech writing for Congressional Debate.</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={speechProgress} className="w-full mb-4" />
              <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                {fullSpeech.split('\n\n').map((paragraph, index) => renderSpeechParagraph(paragraph, index))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpeechWritingGuide;

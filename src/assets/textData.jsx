const textData = {
    start: {
        text: "In a world ravaged by nuclear warfare, hope has become a distant memory. Amid the ruins, the ancient god Ygraorra has descended, offering salvation through the seductive harvest of dreams. His followers, the Dreamweavers, lull the desperate into slumber, where they can escape the bleak reality and dwell in their ideal worlds. But not everyone is swayed; a growing resistance fights to reclaim the shattered remnants of humanity’s former life. You find yourself ensnared by the Dreamweavers, on the brink of Ygraorra's 'grace'. As the whispers of an enchanting utopia flood your mind, you face a pivotal choice: Do you succumb to the alluring visions of a perfect existence, or do you rally against the forces that would bind you to a false paradise?",
        option1text: "Accept Ygraorra's Grace.",
        option2text: "Reject Your Fate, Fight Back!",
        option1path: "accepted",
        option2path: "rejected",
        backgroundImage: "../src/assets/starrysky.jpg"
    },
    accepted: {
        text: "You awaken in a beautiful utopia, where everything you’ve ever wanted is yours. No pain, no suffering, only joy. You begin to lose track of time as days blend into one another in bliss.",
        option1text: "Embrace this New Life.",
        option2text: "Question the Reality.",
        option1path: "embraceNewLife",
        option2path: "questionReality",
        backgroundImage: "../src/assets/paradise.jpg"
    },
    embraceNewLife: {
        text: "You have forgotten the old world, living in your ideal dream forever. You no longer care about what happens in reality, only the perfection of your new world.",
        option1text: "End the Story.",
        option2text: "Reflect on Choices.",
        option1path: null, 
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
    questionReality: {
        text: "Over time, you begin to notice cracks in the perfect world. Repeated conversations, strange glitches in your surroundings, and missing people. You begin to suspect this isn't real. The more you question it, the weaker the dream becomes.",
        option1text: "Continue to question the Dream",
        option2text: "Give up and try to return to your normal perfect life",
        option1path: "Confront",
        option2path: "retreat",
        backgroundImage: "../src/assets/paradise.jpg"
    },
    Confront: {
        text: " You escape the dream, but wake up in the desolate wasteland. The followers are still there, angry at your rebellion. You stand no chance against the armed followers and shortly fall under their assault.",
        option1text: "End the Story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
    retreat: {
        text: "You are unable to reconcile the dream with reality, losing yourself in the in-between. Your mind breaks, leaving you a shell, neither alive in the dream nor in the real world.",
        option1text: "End the Story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
    rejected: {
        text: "You resist Ygraorra's seduction. The world around you remains harsh and unforgiving, but the strength of your will grows. You plot your escape from the temple of Ygraorra, careful not to alert the cultists. You know the wasteland outside holds danger, but it is better than the false paradise they offer. As soon as you spot a gap in the temple's defences you take your chance and manage to flee into the wasteland. Now you have escaped what will you choose to do? The resistance is waiting. Will you lead them to reclaim humanity? Or look out for yourself and try to escape from the cult's reaches on your own?",
        option1text: "Escape for the resistance",
        option2text: "Seek Solitude.",
        option1path: "meetResistance",
        option2path: "seekSolitude",
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    seekSolitude: {
        text: "You decide to journey by yourself, but now you must make a pivotal decision will you choose to stay in the city? Or will you escape from the city trying to run from the pursuits of the cult",
        option1text: "Escape from the City.",
        option2text: "Seek safety somewhere in the City.",
        option1path: "escapeCity",
        option2path: "huntedAgain",
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    escapeCity: {
        text: "You manage to escape, evading the cultists. However, life in the wasteland is brutal. Resources are scarce, and danger lurks around every corner, but at least you are free.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    huntedAgain: {
        text: "Ygraorra’s followers are relentless. They pursue you into the wasteland, determined to bring you back. Whether you continue running and fight until your last breath, or finally submit to their will will determine your fate.",
        option1text: "Submit to Your Pursuers.",
        option2text: "Escape with all you can.",
        option1path: "embraceNewLife",
        option2path: "escapePursuers",
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    escapePursuers: {
        text: "You manage to escape, evading the cultists. However, life in the wasteland is brutal. Finally wasteland takes its toll, and you die alone, but free, refusing Ygraorra’s grasp to the very end.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    meetResistance: {
        text: "You meet others who, like you, have refused Ygraorra’s dream and resist his followers. Together, you plan a rebellion, seeking to destroy the god’s hold over humanity. As you spend time with the resistance, you find yourself questioning their goals. Ygraorra’s promises still linger in your mind. Could it be better to join him and secure a place for yourself in the dream world?",
        option1text: "Join the resistance officially.",
        option2text: "Become a mole for the Dreamweavers.",
        option1path: "joinResistance",
        option2path: "becomeMole",
        backgroundImage: "../src/assets/resistance.jpg"
    },
    joinResistance: {
        text: "Years pass by in a flash. The resistance has been growing stronger, and the time has come for the final push against Ygraorra’s temple. As tensions rise, a trusted general approaches you with a dangerous mission: infiltrate Ygraorra’s temple to gather intelligence and sabotage the defenses from within. This mission is critical for the resistance’s success, but it’s incredibly risky. However, rumors have started to circulate about a traitor within the resistance. Tension is high, and trust is fragile. You feel a creeping sense of unease.",
        option1text: "Push forward with the mission",
        option2text: "Investigate the rumors of a traitor in your ranks",
        option1path: "overthrowCult",
        option2path: "betrayed",
        backgroundImage: "../src/assets/resistance.jpg"
    },
    overthrowCult: {
        text: "You decide to trust your comrades and focus on the mission. The rumors of betrayal worry you, but your dedication to the cause is stronger. You infiltrate Ygraorra’s temple, gathering crucial information about his defenses. Armed with this knowledge, the resistance mounts a successful assault. Your decision to trust the mission pays off. The resistance uses your intel to breach the temple, and with their defences breached the Dreamweavers stand no chance and they fall into disarray. Now there is one thing bothering you still, although the cult has now been vanquished Ygraorra's powers are still strong. Do you search the cults remaining archives to be able to hopefully eliminate this corruption. Or do you burn everything the cult has once touched removing all their traces hoping that no-one will find a way to communicate with this god once again.",
        option1text: "Search archives",
        option2text: "Burn all traces",
        option1path: "theTruth",
        option2path: "bornLeader",
        backgroundImage: "../src/assets/chapel.jpg"
    },
    theTruth: {
        text: "In their archives as you are searching through the tomes you suddenly trigger a hidden passage leading to a dustworn tome. Reading this tome  you discover the true nature of Ygraorra. He was not always a god, but a powerful entity awakened by humanity’s nuclear destruction. His 'dreams' are an attempt to escape the guilt of the ruined world. You find a way to have an encounter with Ygraorra whilst you are both at an equal power. Now one choice remains, do you jump straight to violence and try to battle to remove this god for good. Or do you try to reason with this god to try and use his power for the development of humanity?",
        option1text: "Battle",
        option2text: "Try to reason with the God",
        option1path: "theBattle",
        option2path: "reasoning",
        backgroundImage: "../src/assets/chapel.jpg"
    },
    theBattle: {
        text: "You summon your courage and call Ygraorra forth, challenging him to face you. The world around you shifts, morphing into an otherworldly landscape where the laws of reality bend at the will of its creator. Ygraorra appears before you, a colossal entity wrapped in darkness, his eyes glowing with malice.  Your heart pounds as you prepare for the confrontation, knowing that this battle could determine the fate of countless souls. The two of you clash, each blow reverberating through the dreamscape. You dodge his attacks, feeling the sheer weight of his power as he manipulates the dream around you, summoning twisted nightmares to ensnare you. Dark tendrils lash out, but you sidestep them, countering with your own bursts of energy.Ygraorra retaliates with dark illusions, creating grotesque versions of your deepest fears—lost loved ones, the wasteland, and scenes of despair. Each vision threatens to break your focus, but you refuse to succumb to his mind games. As the battle rages on, you notice Ygraorra beginning to tire. The dreamscape warps and wavers around you, a reflection of the struggle for control. This is your moment—a chance to press the advantage. But just as you prepare to launch your final attack, Ygraorra counters with a massive wave of dark energy, forcing you to make a split-second decision.",
        option1text: "Attempt to take control of the Dreamscape",
        option2text: "Attempt to make one final attack to end the fight",
        option1path: "victoryAchieved",
        option2path: "defeated",
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    victoryAchieved: {
        text: "You close your eyes for a moment, centering yourself and drawing on the ambient energy of the dreamscape. As you channel this power, the landscape shifts. You transform the ground beneath Ygraorra into a quagmire of shifting colors, disorienting him. With each step he takes, the dreamscape shifts to your advantage. You seize the opportunity and launch a series of strategic attacks that overwhelm him. In a climactic moment, you create a massive wave of dream energy that crashes over him, pulling him into a void of his own making. You awaken, empowered by your victory. The dreamscape is no longer in Ygraorra’s clutches now a choice must be made, do you consume Ygraorra's power to take it for your own use? Or do you destroy it so that it may never be used again?",
        option1text: "Devour",
        option2text: "Destroy",
        option1path: "trueEnding",
        option2path: "destroyDivinity",
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    trueEnding: {
        text: "As you absorb Ygraorra's essence, a surge of dark power flows through you, transforming you into a new Dream Devourer. The dreamscape shifts, reshaping itself into a realm of your design—stunning landscapes filled with shimmering light and haunting shadows. You wield the ability to create or destroy, offering dreams or nightmares to those who enter. With your newfound dominion, you attract followers seeking refuge in their ideal realities, but the echoes of Ygraorra’s whispers linger in your mind, urging you to exploit their fears. As the dreamscape flourishes, you grapple with the moral weight of your choices: will you rule benevolently or with an iron grip? Over time, you find that power corrupts, and the line between hope and despair blurs. You stand at a crossroads, faced with the legacy you wish to forge—one of inspiration or oppression. In the end, the dreamscape reflects your decisions, forever shifting between beauty and darkness, as the haunting laughter of Ygraorra reminds you that power always comes with a price.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    destroyDivinity: {
        text: "With a final surge of energy, you shatter Ygraorra’s dark power, watching as the dreamscape collapses around you, dissolving into a swirling vortex of light and shadow. The oppressive realm he created disintegrates, leaving nothing but emptiness in its wake. As the remnants of his influence vanish, you feel a profound sense of liberation. The dreams of those he enslaved are now free, but the dreamscape itself is gone, replaced by a vast void. Though the world of dreams has been destroyed, you understand that true freedom lies in the choices people make. You become a beacon of hope in this new reality, guiding the dreamers towards their own paths and reminding them that they can create their own realities. In the silence that follows, you embrace the unknown, knowing that even without a dreamscape, that the ideal reality can still be made by the choices of the people.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    defeated: {
        text: "As you focus your energy, you realize too late that Ygraorra is channeling his own dark power against you. Your attack is met with an explosion of shadows that engulfs you. The darkness wraps around you, suffocating your light. You feel your strength drain as Ygraorra feeds off your energy, and you are thrown to the ground, helpless. You succumb to Ygraorra’s power, becoming yet another lost soul within his nightmarish realm. Your essence is absorbed into the shadows, and you exist in torment, forever trapped in a cycle of despair.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    reasoning: {
        text: "You stand before Ygraorra, heart pounding with a desperate hope that reason might reach the ancient god. You attempt to appeal to the remnants of humanity within him, believing there is a chance for redemption. But instead of understanding, a cold darkness envelops you. Ygraorra's power surges forth, overwhelming you with crushing force. Pain radiates through your being as the shadows consume your light, extinguishing your spirit. In your final moments, you feel the weight of despair settling over the dreamscape, a haunting reminder of your futile struggle. As your consciousness fades, the world around you darkens, forever marked by Ygraorra's wrath.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/dreamscape.jpg"
    },
    bornLeader: {
        text: "As the dust settles from the destruction of the archive, the truth about Ygraorra and his oppressive reign slips into obscurity. You stand as the leader of the resistance, rallying those who still fight against the darkness, but doubt lingers in the air. The teachings that could have illuminated the path to liberation are lost, leaving your followers to navigate their struggle in ignorance. While the immediate threat of Ygraorra’s physical presence may have diminished, his influence seeps into the minds of the unwary, whispering fears and desires that threaten to undermine your efforts. In the shadows, remnants of his power persist, waiting for the right moment to reclaim their hold. You lead your people with determination, yet the specter of Ygraorra looms ever-present, a reminder that true freedom may remain just out of reach as long as his legacy endures. You resolve to uncover a new path forward, hoping to ignite a spark of rebellion that could one day reveal the hidden truths and finally banish the god from their dreams.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/chapel.jpg"
    },
    betrayed: {
        text: "Determined to uncover the truth, you conduct a discreet investigation, piecing together unsettling clues that lead you to your trusted general. Confronting them in the shadows of your encampment, you witness a moment that solidifies your fears—a clandestine meeting with a figure cloaked in darkness, exchanging plans that betray the very cause you’ve fought for. A wave of betrayal crashes over you as the general turns to face you, a knowing smirk forming. The reality settles in: submission could ensure the safety of your people, but it would mean yielding to a traitor. Alternatively, fighting back could rally your loyal soldiers to stand with you, igniting hope in the face of betrayal, even if it leads to your own",
        option1text: "Submit to the betrayers.",
        option2text: "Refuse to submit and fight back.",
        option1path: "submitBetrayers",
        option2path: "fightBack",
        backgroundImage: "../src/assets/resistance.jpg"
    },
    submitBetrayers: {
        text: "Choosing to submit, you negotiate with your general, sacrificing your ideals for the safety of your people. Although the betrayal stings, your willingness to compromise ensures that your followers are spared from further conflict. In the aftermath, your authority is weakened, and the general's influence grows, sowing distrust among your ranks. While your people survive, they remain unaware of the true nature of their leader’s betrayal, living in a fragile peace that could shatter at any moment. You become a shadow of your former self, knowing that you traded your vision for a temporary respite, haunted by the whispers of treachery that linger in the air.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
    fightBack: {
        text: "Opting to fight back, you confront your general with unwavering resolve. As the clash ensues, your bravery inspires your loyal soldiers to rally behind you, igniting a fierce rebellion against the betrayal. Though the battle is fierce, your willingness to stand against treachery transforms you into a martyr for the cause. In your final moments, as you fall, your followers take up the fight with renewed vigor, determined to honor your sacrifice. The resistance grows stronger in your absence, fueled by your legacy of defiance, ultimately striking a blow against Ygraorra’s lingering influence. Your name becomes a rallying cry for those who dare to resist, ensuring that the fight for freedom continues in your spirit.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/ruinedCity.jpg"
    },
    becomeMole: {
        text: "You decide to become a mole for the cult, trying to secure your own place following the potential collapse of the resistance. Tensions rise within the resistance as rumors of a traitor circulate after a critical mission fails. During a crucial meeting, leaders express their suspicions, making you aware that the spotlight is shifting toward you. You must decide, do you take action to deflect suspicion and maintain your cover? Or do you seize the moment to align yourself with the resistance, risking exposure?",
        option1text: "Express your allegiance to the Resistance",
        option2text: "Deflect suspicion",
        option1path: "moleDiscovered",
        option2path: "undiscoveredMole",
        backgroundImage: "../src/assets/resistance.jpg"
    },
    moleDiscovered: {
        text: "Your heart races as the confrontation unfolds. Accusations fly, and the weight of betrayal bears down on you. Despite your attempts to defend yourself, the evidence is overwhelming. The resistance members, once your comrades, now glare at you with a mix of anger and disappointment. In a swift judgment, they decide your fate. Stripped of your title and cast aside, you are exiled from the very cause you sought to infiltrate. As you walk away from the camp, their shouts of betrayal echo in your ears, a haunting reminder of your choices. Though you planned to undermine the resistance, you find yourself alone in a world fraught with danger. With Ygraorra’s influence still looming, you realize that your betrayal has left you with no allies, no path to redemption, and a future shrouded in uncertainty.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/resistance.jpg"
    },
    undiscoveredMole: {
        text: "The resistance has gained momentum, igniting hope among the remnants of humanity. Yet, as you infiltrate their ranks as a mole, you sense the undercurrents of discontent brewing within their leadership. Rumors swirl of a betrayal that could shatter their fragile alliance, and you find yourself at a crossroads. As you gather intelligence, you discover a critical weakness in the resistance’s plans—a betrayal waiting to unfold. You now face a choice: take an active role in orchestrating their downfall, ensuring that Ygraorra’s power remains unchallenged, or play both sides, using the information you've collected to navigate the chaos, so that regardless of who emerges victorious, you will secure your own safety.",
        option1text: "actively take part in destruction of resistance",
        option2text: "stay in the back and play both sides",
        option1path: "activeBetrayer",
        option2path: "doubleCrossed",
        backgroundImage: "../src/assets/resistance.jpg"
    },
    activeBetrayer: {
        text: "After your betrayal, Ygraorra manifests in your mind, showering you with praise for your unwavering loyalty. He bestows upon you the 'honor' of joining his dream, not as a mere dreamer, but as a warden of the dream realm—one of the few who can traverse both the dreamscape and reality with awareness. Your new existence is filled with unimaginable luxuries and immense power within his dream empire. You command legions of dreamers, shaping their nightmares and fantasies at will. Yet, beneath the surface of your newfound authority lies a gnawing ache—the haunting memories of those you betrayed. With each passing day, the weight of your choices presses heavily on your conscience. The price of your betrayal is a shattered peace of mind, binding you to Ygraorra’s will forever. You are now a puppet in his grand design, enjoying the spoils of your treachery while knowing you can never escape the shadows of your past.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
    doubleCrossed: {
        text: "Ygraorra’s followers express their gratitude for your betrayal, celebrating the downfall of the resistance. Yet, once their victory is secured, they no longer see you as valuable. Despite your cunning, they regard you as a mere weak human, unworthy of standing among their ranks. Without hesitation, they cast you into the dream world, stripping you of your agency. In this fabricated paradise, the comforts of luxury surround you, but the guilt of your actions festers within. Nightmares, born from the memories of those you sacrificed for your selfish desires, haunt your every moment. Trapped in an eternity of fear, you are forced to confront the truth of your choices, living under the oppressive weight of remorse. The dreams that once promised escape become your prison, a constant reminder that betrayal brings not freedom, but a haunting desolation that you cannot escape.",
        option1text: "End the story.",
        option2text: "Reflect on Choices.",
        option1path: null,
        option2path: null,
        backgroundImage: "../src/assets/paradise.jpg"
    },
};

export default textData;

/*
  - This `textData` object holds all the narrative choices and branching paths for the game's story.
  
  - Each id in the object represents a state in the storyline, like "start", "accepted", or "rejected". 
  - For each state, there is corresponding text string that provides the narrative description at that point.
  - `option1text` and `option2text` are the displayed text for the two available choices the player can make at each decision point.
  - `option1path` and `option2path` define the next state (or path) based on the player's choice, linking to another id within textData to continue the story.
  
  - If `option1path` or `option2path` is `null`, it means that there are no further choices for that branch (the end of that path).
*/

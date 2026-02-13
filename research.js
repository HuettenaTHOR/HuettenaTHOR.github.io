/* =========================================================
   DIVE — Exercise Research & References  (research.js)
   Detailed scientific background for each breathing exercise
   ========================================================= */

const RESEARCH = {
  // ═══════════════════════════════════════════════════════
  // INTERVAL BREATH-HOLD
  // ═══════════════════════════════════════════════════════
  interval: {
    de: {
      title: '📚 Hintergrund: Intervall-Atemanhalten',
      sections: [
        {
          heading: 'Was ist Apnoe-Training?',
          text: `Apnoe-Training (vom griechischen „apnoia" — Atemlosigkeit) ist die systematische Praxis des willentlichen Atemanhaltens. Ursprünglich von Freitauchern und Unterwassersportlern entwickelt, wird diese Technik heute auch von Athleten, dem Militär und in der klinischen Rehabilitation eingesetzt. Das Ziel des Intervall-Atemanhaltens ist es, die Toleranz gegenüber erhöhten CO₂-Werten (Hyperkapnie) und niedrigeren O₂-Werten (Hypoxie) zu verbessern, was den Atemreflex verzögert und die allgemeine Atemkontrolle stärkt.`
        },
        {
          heading: 'Physiologische Mechanismen',
          text: `Während des Atemanhaltens steigt der CO₂-Partialdruck im Blut an, während der O₂-Partialdruck sinkt. Der Körper reagiert mit dem sogenannten „Tauchreflex" (diving response), der eine Bradykardie (Verlangsamung der Herzfrequenz), eine periphere Vasokonstriktion (Verengung der Blutgefäße in den Extremitäten) und eine Umverteilung des Blutflusses zu den lebenswichtigen Organen (Gehirn, Herz) umfasst. Dieser Reflex ist bei allen Säugetieren vorhanden und kann durch Training verstärkt werden.

Wiederholtes Apnoe-Training führt nachweislich zu einer erhöhten Milzkontraktion, die zusätzliche rote Blutkörperchen in den Kreislauf freisetzt und so die Sauerstoffkapazität des Blutes kurzfristig erhöht. Studien an den Bajau, einem Seenomadenvolk in Südostasien, zeigten sogar genetische Anpassungen in Form einer vergrößerten Milz — ein Hinweis auf die evolutionäre Bedeutung dieser Fähigkeit.`
        },
        {
          heading: 'Trainingseffekte',
          text: `Regelmäßiges Intervall-Apnoe-Training kann folgende Effekte haben:

• Verlängerte Atemanhaltezeit durch verbesserte CO₂-Toleranz
• Erhöhte Konzentration von Hämoglobin und Erythropoetin (EPO)
• Verbesserte mentale Belastbarkeit und Stressresistenz
• Aktivierung des parasympathischen Nervensystems und Förderung der Entspannung
• Verbesserung der VO₂max bei Ausdauersportlern (als Ergänzungstraining)

Das Intervallformat — Anhalten mit abnehmenden Ruhepausen — simuliert die zunehmende Belastung, die Freitaucher bei aufeinanderfolgenden Tauchgängen erfahren. Die verkürzten Erholungsphasen trainieren den Körper, schneller zu entsättigen und sich an wiederholte hypoxische Reize anzupassen.`
        },
        {
          heading: 'Sicherheitshinweise',
          text: `⚠️ Apnoe-Training sollte niemals alleine im Wasser durchgeführt werden — die Gefahr eines Schwimmbad-Blackouts (hypoxischer Bewusstseinsverlust) ist real und kann innerhalb von Sekunden zum Ertrinken führen. Trockenübungen an Land, wie sie diese App anbietet, sind die sicherste Form des Trainings. Personen mit Herz-Kreislauf-Erkrankungen, Epilepsie oder Schwangere sollten vor Beginn eines Atemanhalte-Trainings einen Arzt konsultieren.`
        }
      ],
      references: [
        'Schagatay, E. (2010). Predicting performance in competitive apnoea diving. Part II: Dynamic apnoea. <i>Diving and Hyperbaric Medicine</i>, 40(1), 11–22.',
        'Ilardo, M. A. et al. (2018). Physiological and genetic adaptations to diving in Sea Nomads. <i>Cell</i>, 173(3), 569–580.',
        'Lemaitre, F. et al. (2010). Effect of a long-term breath-hold diving on ventilatory responses to hypoxia and hypercapnia. <i>Respiratory Physiology & Neurobiology</i>, 172(3), 114–118.',
        'Ferretti, G. (2001). Extreme human breath-hold diving. <i>European Journal of Applied Physiology</i>, 84(4), 254–271.',
        'Lindholm, P. & Lundgren, C. E. (2009). The physiology and pathophysiology of human breath-hold diving. <i>Journal of Applied Physiology</i>, 106(1), 284–292.'
      ]
    },
    en: {
      title: '📚 Background: Interval Breath-Hold',
      sections: [
        {
          heading: 'What is Apnea Training?',
          text: `Apnea training (from the Greek "apnoia" — breathlessness) is the systematic practice of voluntary breath-holding. Originally developed by freedivers and underwater athletes, this technique is now also used by athletes, military personnel, and in clinical rehabilitation. The goal of interval breath-holding is to improve tolerance to elevated CO₂ levels (hypercapnia) and lower O₂ levels (hypoxia), which delays the urge to breathe and strengthens overall respiratory control.`
        },
        {
          heading: 'Physiological Mechanisms',
          text: `During breath-holding, the partial pressure of CO₂ in the blood rises while the partial pressure of O₂ drops. The body responds with the "diving reflex" (mammalian dive response), which includes bradycardia (slowing of heart rate), peripheral vasoconstriction (narrowing of blood vessels in the extremities), and a redistribution of blood flow to vital organs (brain, heart). This reflex is present in all mammals and can be enhanced through training.

Repeated apnea training has been shown to increase splenic contraction, releasing additional red blood cells into the circulation and temporarily increasing the oxygen-carrying capacity of the blood. Studies on the Bajau, a sea nomad people in Southeast Asia, have even demonstrated genetic adaptations in the form of an enlarged spleen — a hint at the evolutionary significance of this ability.`
        },
        {
          heading: 'Training Effects',
          text: `Regular interval apnea training can produce the following effects:

• Extended breath-hold duration through improved CO₂ tolerance
• Increased concentration of hemoglobin and erythropoietin (EPO)
• Improved mental resilience and stress resistance
• Activation of the parasympathetic nervous system, promoting relaxation
• Improvement of VO₂max in endurance athletes (as supplementary training)

The interval format — holding with decreasing rest periods — simulates the increasing stress that freedivers experience during successive dives. The shortened recovery phases train the body to desaturate more quickly and adapt to repeated hypoxic stimuli.`
        },
        {
          heading: 'Safety Notes',
          text: `⚠️ Apnea training should never be performed alone in water — the danger of shallow water blackout (hypoxic loss of consciousness) is real and can lead to drowning within seconds. Dry-land exercises, such as those offered by this app, are the safest form of training. Individuals with cardiovascular conditions, epilepsy, or those who are pregnant should consult a physician before beginning breath-hold training.`
        }
      ],
      references: [
        'Schagatay, E. (2010). Predicting performance in competitive apnoea diving. Part II: Dynamic apnoea. <i>Diving and Hyperbaric Medicine</i>, 40(1), 11–22.',
        'Ilardo, M. A. et al. (2018). Physiological and genetic adaptations to diving in Sea Nomads. <i>Cell</i>, 173(3), 569–580.',
        'Lemaitre, F. et al. (2010). Effect of a long-term breath-hold diving on ventilatory responses to hypoxia and hypercapnia. <i>Respiratory Physiology & Neurobiology</i>, 172(3), 114–118.',
        'Ferretti, G. (2001). Extreme human breath-hold diving. <i>European Journal of Applied Physiology</i>, 84(4), 254–271.',
        'Lindholm, P. & Lundgren, C. E. (2009). The physiology and pathophysiology of human breath-hold diving. <i>Journal of Applied Physiology</i>, 106(1), 284–292.'
      ]
    },
    es: {
      title: '📚 Información: Apnea por Intervalos',
      sections: [
        {
          heading: '¿Qué es el entrenamiento de apnea?',
          text: `El entrenamiento de apnea (del griego "apnoia" — sin aliento) es la práctica sistemática de la retención voluntaria de la respiración. Originalmente desarrollada por apneístas y deportistas subacuáticos, esta técnica se utiliza hoy también por atletas, personal militar y en rehabilitación clínica. El objetivo de la retención por intervalos es mejorar la tolerancia a niveles elevados de CO₂ (hipercapnia) y niveles reducidos de O₂ (hipoxia), lo que retrasa la necesidad de respirar y fortalece el control respiratorio general.`
        },
        {
          heading: 'Mecanismos fisiológicos',
          text: `Durante la retención de la respiración, la presión parcial de CO₂ en la sangre aumenta mientras que la de O₂ disminuye. El cuerpo responde con el "reflejo de inmersión" (respuesta de inmersión de los mamíferos), que incluye bradicardia (disminución de la frecuencia cardíaca), vasoconstricción periférica y redistribución del flujo sanguíneo a los órganos vitales (cerebro, corazón). Este reflejo está presente en todos los mamíferos y puede mejorarse con el entrenamiento.

El entrenamiento repetido de apnea produce una contracción esplénica aumentada, liberando glóbulos rojos adicionales en la circulación y aumentando temporalmente la capacidad de transporte de oxígeno de la sangre. Estudios sobre los Bajau, un pueblo nómada del mar en el sudeste asiático, demostraron adaptaciones genéticas en forma de un bazo agrandado.`
        },
        {
          heading: 'Efectos del entrenamiento',
          text: `El entrenamiento regular de apnea por intervalos puede producir los siguientes efectos:

• Mayor duración de retención mediante mejor tolerancia al CO₂
• Aumento de hemoglobina y eritropoyetina (EPO)
• Mejora de la resiliencia mental y resistencia al estrés
• Activación del sistema nervioso parasimpático, promoviendo la relajación
• Mejora del VO₂max en atletas de resistencia

El formato de intervalos — retención con períodos de descanso decrecientes — simula el estrés creciente que experimentan los apneístas durante inmersiones sucesivas.`
        },
        {
          heading: 'Notas de seguridad',
          text: `⚠️ El entrenamiento de apnea nunca debe realizarse solo en el agua — el peligro de síncope hipóxico es real y puede provocar ahogamiento en segundos. Los ejercicios en seco, como los que ofrece esta aplicación, son la forma más segura de entrenamiento. Las personas con enfermedades cardiovasculares, epilepsia o embarazadas deben consultar a un médico antes de comenzar.`
        }
      ],
      references: [
        'Schagatay, E. (2010). Predicting performance in competitive apnoea diving. Part II: Dynamic apnoea. <i>Diving and Hyperbaric Medicine</i>, 40(1), 11–22.',
        'Ilardo, M. A. et al. (2018). Physiological and genetic adaptations to diving in Sea Nomads. <i>Cell</i>, 173(3), 569–580.',
        'Lemaitre, F. et al. (2010). Effect of a long-term breath-hold diving on ventilatory responses to hypoxia and hypercapnia. <i>Respiratory Physiology & Neurobiology</i>, 172(3), 114–118.',
        'Ferretti, G. (2001). Extreme human breath-hold diving. <i>European Journal of Applied Physiology</i>, 84(4), 254–271.',
        'Lindholm, P. & Lundgren, C. E. (2009). The physiology and pathophysiology of human breath-hold diving. <i>Journal of Applied Physiology</i>, 106(1), 284–292.'
      ]
    },
    fr: {
      title: '📚 Informations : Apnée par Intervalles',
      sections: [
        {
          heading: 'Qu\'est-ce que l\'entraînement en apnée ?',
          text: `L'entraînement en apnée (du grec « apnoia » — absence de souffle) est la pratique systématique de la rétention volontaire du souffle. Initialement développée par les plongeurs en apnée et les athlètes sous-marins, cette technique est aujourd'hui également utilisée par les athlètes, le personnel militaire et en rééducation clinique. L'objectif de la rétention par intervalles est d'améliorer la tolérance aux niveaux élevés de CO₂ (hypercapnie) et aux niveaux réduits d'O₂ (hypoxie), ce qui retarde le besoin de respirer et renforce le contrôle respiratoire global.`
        },
        {
          heading: 'Mécanismes physiologiques',
          text: `Pendant la rétention du souffle, la pression partielle de CO₂ dans le sang augmente tandis que celle d'O₂ diminue. Le corps répond par le « réflexe de plongée » (réponse de plongée des mammifères), qui comprend une bradycardie (ralentissement du rythme cardiaque), une vasoconstriction périphérique et une redistribution du flux sanguin vers les organes vitaux (cerveau, cœur). Ce réflexe est présent chez tous les mammifères et peut être amélioré par l'entraînement.

L'entraînement répété en apnée augmente la contraction splénique, libérant des globules rouges supplémentaires dans la circulation et augmentant temporairement la capacité de transport d'oxygène du sang. Des études sur les Bajau, un peuple nomade de la mer en Asie du Sud-Est, ont démontré des adaptations génétiques sous forme d'une rate élargie.`
        },
        {
          heading: 'Effets de l\'entraînement',
          text: `L'entraînement régulier d'apnée par intervalles peut produire les effets suivants :

• Durée de rétention prolongée grâce à une meilleure tolérance au CO₂
• Augmentation de l'hémoglobine et de l'érythropoïétine (EPO)
• Amélioration de la résilience mentale et de la résistance au stress
• Activation du système nerveux parasympathique, favorisant la relaxation
• Amélioration du VO₂max chez les athlètes d'endurance

Le format par intervalles — rétention avec des périodes de repos décroissantes — simule le stress croissant que les apnéistes ressentent lors de plongées successives.`
        },
        {
          heading: 'Notes de sécurité',
          text: `⚠️ L'entraînement en apnée ne doit jamais être pratiqué seul dans l'eau — le danger de syncope hypoxique est réel et peut entraîner la noyade en quelques secondes. Les exercices à sec, comme ceux proposés par cette application, sont la forme la plus sûre d'entraînement. Les personnes souffrant de maladies cardiovasculaires, d'épilepsie ou les femmes enceintes doivent consulter un médecin avant de commencer.`
        }
      ],
      references: [
        'Schagatay, E. (2010). Predicting performance in competitive apnoea diving. Part II: Dynamic apnoea. <i>Diving and Hyperbaric Medicine</i>, 40(1), 11–22.',
        'Ilardo, M. A. et al. (2018). Physiological and genetic adaptations to diving in Sea Nomads. <i>Cell</i>, 173(3), 569–580.',
        'Lemaitre, F. et al. (2010). Effect of a long-term breath-hold diving on ventilatory responses to hypoxia and hypercapnia. <i>Respiratory Physiology & Neurobiology</i>, 172(3), 114–118.',
        'Ferretti, G. (2001). Extreme human breath-hold diving. <i>European Journal of Applied Physiology</i>, 84(4), 254–271.',
        'Lindholm, P. & Lundgren, C. E. (2009). The physiology and pathophysiology of human breath-hold diving. <i>Journal of Applied Physiology</i>, 106(1), 284–292.'
      ]
    }
  },

  // ═══════════════════════════════════════════════════════
  // WIM HOF METHOD
  // ═══════════════════════════════════════════════════════
  wimhof: {
    de: {
      title: '📚 Hintergrund: Wim-Hof-Methode',
      sections: [
        {
          heading: 'Ursprung und Entwicklung',
          text: `Die Wim-Hof-Methode (WHM) wurde von dem niederländischen Extremsportler Wim Hof entwickelt, der auch als „The Iceman" bekannt ist. Hof hält zahlreiche Weltrekorde für Kälteexposition, darunter das längste Eisbad (1 Stunde, 52 Minuten und 42 Sekunden) und das Besteigen des Kilimandscharo in Shorts. Die Methode basiert auf drei Säulen: Atemtechnik, Kälteexposition und Meditation/Willenskraft.

Die Atemtechnik besteht aus 30–40 schnellen, tiefen Atemzügen (kontrollierte Hyperventilation), gefolgt von einem vollständigen Ausatmen und einer möglichst langen Atemanhalte-Phase (Retention). Anschließend wird ein tiefer Erholungsatemzug genommen und für etwa 15 Sekunden gehalten. Dieser Zyklus wird typischerweise 3–4 Mal wiederholt.`
        },
        {
          heading: 'Wissenschaftliche Forschung',
          text: `Eine bahnbrechende Studie an der Radboud-Universität in Nijmegen (2014) zeigte, dass Teilnehmer, die in der WHM geschult wurden, nach Injektion von Endotoxin (einem bakteriellen Bestandteil) eine deutlich verringerte Immunantwort zeigten — mit weniger grippeähnlichen Symptomen, niedrigeren proinflammatorischen Zytokinwerten (TNF-α, IL-6, IL-8) und höheren Werten des entzündungshemmenden Zytokins IL-10. Dies war die erste Demonstration, dass das autonome Nervensystem und die angeborene Immunantwort durch bewusste Techniken beeinflusst werden können.

Weitere Studien haben gezeigt, dass die WHM-Atemtechnik zu einer vorübergehenden respiratorischen Alkalose führt (pH-Anstieg durch CO₂-Abatmung), die die Adrenalinfreisetzung stimuliert. Dieser Adrenalinschub scheint für die immunmodulatorischen Effekte verantwortlich zu sein.

Eine Studie von Muzik et al. (2018) an der Wayne State University untersuchte die Gehirnaktivität von Wim Hof mittels fMRT und PET-Scan und fand, dass seine Atemtechnik die Freisetzung von endogenen Opioiden und Cannabinoiden im Gehirn stimuliert, was die Schmerzwahrnehmung moduliert.`
        },
        {
          heading: 'Physiologische Effekte',
          text: `Die WHM-Atemtechnik bewirkt eine Reihe messbarer physiologischer Veränderungen:

• Vorübergehende Hyperventilation: schneller Abfall des CO₂-Partialdrucks (Hypokapnie)
• Respiratorische Alkalose: Anstieg des Blut-pH von ~7,4 auf ~7,7
• Sympathikus-Aktivierung: erhöhte Adrenalin- und Noradrenalinausschüttung
• Erhöhte Kältetoleranz durch braunes Fettgewebe-Aktivierung
• Vorübergehende Hypoxie während der Retentionsphase, die zelluläre Stressresistenz-Mechanismen aktiviert (Hormesis)

Die Kombination aus kontrollierter Hyperventilation und anschließender Atemanhalte-Phase erzeugt einen einzigartigen physiologischen Reiz, der mit keiner anderen Atemtechnik vergleichbar ist.`
        },
        {
          heading: 'Sicherheitshinweise',
          text: `⚠️ Die WHM-Atemtechnik kann zu Schwindel, Kribbeln in den Extremitäten und kurzzeitiger Bewusstlosigkeit führen. Sie sollte niemals im Wasser, beim Autofahren oder in Situationen durchgeführt werden, in denen ein Bewusstseinsverlust gefährlich wäre. Personen mit Epilepsie, Herz-Kreislauf-Erkrankungen oder Schwangere sollten die Methode nicht ohne ärztliche Rücksprache anwenden.`
        }
      ],
      references: [
        'Kox, M. et al. (2014). Voluntary activation of the sympathetic nervous system and attenuation of the innate immune response in humans. <i>Proceedings of the National Academy of Sciences</i>, 111(20), 7379–7384.',
        'Muzik, O. et al. (2018). "Brain over body" — A study on the willful regulation of autonomic function during cold exposure. <i>NeuroImage</i>, 172, 632–641.',
        'Zwaag, J. et al. (2022). The effects of cold exposure training and a breathing exercise on the inflammatory response in humans: a pilot study. <i>Psychosomatic Medicine</i>, 84(4), 457–467.',
        'Buijze, G. A. et al. (2016). The effect of cold showering on health and work: a randomized controlled trial. <i>PLOS ONE</i>, 11(9), e0161749.',
        'Hof, W. & de Jong, K. (2020). <i>The Wim Hof Method: Activate Your Full Human Potential</i>. Sounds True Publishing.'
      ]
    },
    en: {
      title: '📚 Background: Wim Hof Method',
      sections: [
        {
          heading: 'Origin and Development',
          text: `The Wim Hof Method (WHM) was developed by Dutch extreme athlete Wim Hof, also known as "The Iceman." Hof holds numerous world records for cold exposure, including the longest ice bath (1 hour, 52 minutes and 42 seconds) and climbing Kilimanjaro in shorts. The method is based on three pillars: breathing technique, cold exposure, and meditation/commitment.

The breathing technique consists of 30–40 rapid, deep breaths (controlled hyperventilation), followed by a full exhale and holding the breath as long as possible (retention). Then a deep recovery breath is taken and held for approximately 15 seconds. This cycle is typically repeated 3–4 times.`
        },
        {
          heading: 'Scientific Research',
          text: `A landmark study at Radboud University in Nijmegen (2014) showed that participants trained in the WHM demonstrated a significantly reduced immune response after injection of endotoxin (a bacterial component) — with fewer flu-like symptoms, lower proinflammatory cytokine levels (TNF-α, IL-6, IL-8), and higher levels of the anti-inflammatory cytokine IL-10. This was the first demonstration that the autonomic nervous system and innate immune response can be influenced through conscious techniques.

Further studies have shown that the WHM breathing technique leads to temporary respiratory alkalosis (pH increase through CO₂ elimination), which stimulates adrenaline release. This adrenaline surge appears to be responsible for the immunomodulatory effects.

A study by Muzik et al. (2018) at Wayne State University examined Wim Hof's brain activity using fMRI and PET scanning and found that his breathing technique stimulates the release of endogenous opioids and cannabinoids in the brain, modulating pain perception.`
        },
        {
          heading: 'Physiological Effects',
          text: `The WHM breathing technique produces a range of measurable physiological changes:

• Temporary hyperventilation: rapid decrease in CO₂ partial pressure (hypocapnia)
• Respiratory alkalosis: blood pH increase from ~7.4 to ~7.7
• Sympathetic activation: increased adrenaline and noradrenaline release
• Enhanced cold tolerance through brown adipose tissue activation
• Temporary hypoxia during retention phase, activating cellular stress resistance mechanisms (hormesis)

The combination of controlled hyperventilation followed by breath retention creates a unique physiological stimulus unmatched by any other breathing technique.`
        },
        {
          heading: 'Safety Notes',
          text: `⚠️ The WHM breathing technique can cause dizziness, tingling in the extremities, and brief loss of consciousness. It should never be performed in water, while driving, or in situations where loss of consciousness could be dangerous. Individuals with epilepsy, cardiovascular conditions, or those who are pregnant should not use the method without medical consultation.`
        }
      ],
      references: [
        'Kox, M. et al. (2014). Voluntary activation of the sympathetic nervous system and attenuation of the innate immune response in humans. <i>Proceedings of the National Academy of Sciences</i>, 111(20), 7379–7384.',
        'Muzik, O. et al. (2018). "Brain over body" — A study on the willful regulation of autonomic function during cold exposure. <i>NeuroImage</i>, 172, 632–641.',
        'Zwaag, J. et al. (2022). The effects of cold exposure training and a breathing exercise on the inflammatory response in humans: a pilot study. <i>Psychosomatic Medicine</i>, 84(4), 457–467.',
        'Buijze, G. A. et al. (2016). The effect of cold showering on health and work: a randomized controlled trial. <i>PLOS ONE</i>, 11(9), e0161749.',
        'Hof, W. & de Jong, K. (2020). <i>The Wim Hof Method: Activate Your Full Human Potential</i>. Sounds True Publishing.'
      ]
    },
    es: {
      title: '📚 Información: Método Wim Hof',
      sections: [
        {
          heading: 'Origen y desarrollo',
          text: `El Método Wim Hof (WHM) fue desarrollado por el atleta extremo holandés Wim Hof, también conocido como "The Iceman" (El Hombre de Hielo). Hof posee numerosos récords mundiales de exposición al frío, incluyendo el baño de hielo más largo (1 hora, 52 minutos y 42 segundos) y la escalada del Kilimanjaro en pantalones cortos. El método se basa en tres pilares: técnica de respiración, exposición al frío y meditación/compromiso.

La técnica de respiración consiste en 30–40 respiraciones rápidas y profundas (hiperventilación controlada), seguidas de una exhalación completa y una retención de la respiración lo más larga posible. Luego se toma una respiración de recuperación profunda que se mantiene durante aproximadamente 15 segundos. Este ciclo se repite típicamente 3–4 veces.`
        },
        {
          heading: 'Investigación científica',
          text: `Un estudio histórico en la Universidad Radboud de Nijmegen (2014) demostró que los participantes entrenados en el WHM mostraron una respuesta inmune significativamente reducida tras la inyección de endotoxina — con menos síntomas gripales, niveles más bajos de citocinas proinflamatorias (TNF-α, IL-6, IL-8) y niveles más altos de la citocina antiinflamatoria IL-10. Esta fue la primera demostración de que el sistema nervioso autónomo y la respuesta inmune innata pueden influenciarse mediante técnicas conscientes.

Un estudio de Muzik et al. (2018) en la Universidad Wayne State examinó la actividad cerebral de Wim Hof usando fMRI y PET, encontrando que su técnica de respiración estimula la liberación de opioides y cannabinoides endógenos en el cerebro, modulando la percepción del dolor.`
        },
        {
          heading: 'Efectos fisiológicos',
          text: `La técnica de respiración WHM produce cambios fisiológicos medibles:

• Hiperventilación temporal: disminución rápida de la presión parcial de CO₂
• Alcalosis respiratoria: aumento del pH sanguíneo de ~7,4 a ~7,7
• Activación simpática: aumento de la liberación de adrenalina y noradrenalina
• Mayor tolerancia al frío mediante activación del tejido adiposo pardo
• Hipoxia temporal durante la retención, activando mecanismos de resistencia al estrés celular (hormesis)`
        },
        {
          heading: 'Notas de seguridad',
          text: `⚠️ La técnica de respiración WHM puede causar mareos, hormigueo en las extremidades y pérdida breve de consciencia. Nunca debe realizarse en el agua, conduciendo o en situaciones donde la pérdida de consciencia podría ser peligrosa. Las personas con epilepsia, enfermedades cardiovasculares o embarazadas deben consultar a un médico antes de usarla.`
        }
      ],
      references: [
        'Kox, M. et al. (2014). Voluntary activation of the sympathetic nervous system and attenuation of the innate immune response in humans. <i>Proceedings of the National Academy of Sciences</i>, 111(20), 7379–7384.',
        'Muzik, O. et al. (2018). "Brain over body" — A study on the willful regulation of autonomic function during cold exposure. <i>NeuroImage</i>, 172, 632–641.',
        'Zwaag, J. et al. (2022). The effects of cold exposure training and a breathing exercise on the inflammatory response in humans: a pilot study. <i>Psychosomatic Medicine</i>, 84(4), 457–467.',
        'Buijze, G. A. et al. (2016). The effect of cold showering on health and work: a randomized controlled trial. <i>PLOS ONE</i>, 11(9), e0161749.',
        'Hof, W. & de Jong, K. (2020). <i>The Wim Hof Method: Activate Your Full Human Potential</i>. Sounds True Publishing.'
      ]
    },
    fr: {
      title: '📚 Informations : Méthode Wim Hof',
      sections: [
        {
          heading: 'Origine et développement',
          text: `La Méthode Wim Hof (WHM) a été développée par l'athlète extrême néerlandais Wim Hof, également connu sous le nom de « The Iceman ». Hof détient de nombreux records du monde d'exposition au froid, dont le plus long bain de glace (1 heure, 52 minutes et 42 secondes) et l'ascension du Kilimandjaro en short. La méthode repose sur trois piliers : technique respiratoire, exposition au froid et méditation/engagement.

La technique respiratoire consiste en 30 à 40 respirations rapides et profondes (hyperventilation contrôlée), suivies d'une expiration complète et d'une rétention du souffle aussi longue que possible. Ensuite, une respiration de récupération profonde est prise et maintenue pendant environ 15 secondes. Ce cycle est typiquement répété 3 à 4 fois.`
        },
        {
          heading: 'Recherche scientifique',
          text: `Une étude marquante à l'Université Radboud de Nimègue (2014) a montré que les participants formés au WHM présentaient une réponse immunitaire significativement réduite après injection d'endotoxine — avec moins de symptômes grippaux, des niveaux plus bas de cytokines pro-inflammatoires (TNF-α, IL-6, IL-8) et des niveaux plus élevés de la cytokine anti-inflammatoire IL-10.

Une étude de Muzik et al. (2018) à l'Université Wayne State a examiné l'activité cérébrale de Wim Hof par IRMf et TEP, trouvant que sa technique respiratoire stimule la libération d'opioïdes et de cannabinoïdes endogènes dans le cerveau, modulant la perception de la douleur.`
        },
        {
          heading: 'Effets physiologiques',
          text: `La technique respiratoire WHM produit des changements physiologiques mesurables :

• Hyperventilation temporaire : baisse rapide de la pression partielle de CO₂
• Alcalose respiratoire : augmentation du pH sanguin de ~7,4 à ~7,7
• Activation sympathique : libération accrue d'adrénaline et de noradrénaline
• Tolérance au froid améliorée par activation du tissu adipeux brun
• Hypoxie temporaire pendant la rétention, activant les mécanismes de résistance au stress cellulaire (hormèse)`
        },
        {
          heading: 'Notes de sécurité',
          text: `⚠️ La technique de respiration WHM peut provoquer des vertiges, des picotements dans les extrémités et une brève perte de conscience. Elle ne doit jamais être pratiquée dans l'eau, en conduisant ou dans des situations où une perte de conscience pourrait être dangereuse. Les personnes épileptiques, atteintes de maladies cardiovasculaires ou enceintes doivent consulter un médecin avant de l'utiliser.`
        }
      ],
      references: [
        'Kox, M. et al. (2014). Voluntary activation of the sympathetic nervous system and attenuation of the innate immune response in humans. <i>Proceedings of the National Academy of Sciences</i>, 111(20), 7379–7384.',
        'Muzik, O. et al. (2018). "Brain over body" — A study on the willful regulation of autonomic function during cold exposure. <i>NeuroImage</i>, 172, 632–641.',
        'Zwaag, J. et al. (2022). The effects of cold exposure training and a breathing exercise on the inflammatory response in humans: a pilot study. <i>Psychosomatic Medicine</i>, 84(4), 457–467.',
        'Buijze, G. A. et al. (2016). The effect of cold showering on health and work: a randomized controlled trial. <i>PLOS ONE</i>, 11(9), e0161749.',
        'Hof, W. & de Jong, K. (2020). <i>The Wim Hof Method: Activate Your Full Human Potential</i>. Sounds True Publishing.'
      ]
    }
  },

  // ═══════════════════════════════════════════════════════
  // BOX BREATHING
  // ═══════════════════════════════════════════════════════
  box: {
    de: {
      title: '📚 Hintergrund: Box-Atmung',
      sections: [
        {
          heading: 'Geschichte und Anwendung',
          text: `Die Box-Atmung (auch „Quadrat-Atmung" oder „taktische Atmung" genannt) ist eine Atemtechnik, die weithin dem ehemaligen Navy-SEAL-Kommandeur Mark Divine zugeschrieben wird, der sie unter dem Namen „Box Breathing" populär machte. Die Technik wird von Spezialeinheiten, Polizeibeamten, Chirurgen und Profisportlern eingesetzt, um unter extremem Druck ruhig und fokussiert zu bleiben.

Das Prinzip ist elegant einfach: Einatmen, Halten, Ausatmen und wieder Halten — jeweils für die gleiche Zeitdauer (typischerweise 4 Sekunden). Die gleichmäßige, symmetrische Struktur gibt der Technik ihren Namen und macht sie leicht erlernbar.`
        },
        {
          heading: 'Wirkung auf das autonome Nervensystem',
          text: `Die Box-Atmung wirkt primär über die Aktivierung des Vagusnervs, des längsten Hirnnervs, der eine zentrale Rolle bei der Regulation des parasympathischen Nervensystems spielt. Die langsame, kontrollierte Atmung mit Atempausen stimuliert den „vagalen Tonus" und verschiebt das Gleichgewicht des autonomen Nervensystems vom sympathischen (Kampf-oder-Flucht) zum parasympathischen (Ruhe-und-Verdauen) Modus.

Mehrere Studien haben gezeigt, dass kontrollierte langsame Atemtechniken die Herzfrequenzvariabilität (HRV) erhöhen — ein Marker für kardiovaskuläre Gesundheit und Stressresistenz. Zaccaro et al. (2018) fanden in einer systematischen Übersichtsarbeit, dass langsame Atemtechniken (unter 10 Atemzüge pro Minute) konsistent eine erhöhte HRV, reduzierte Angstzustände und ein erhöhtes Alpha-Wellen-EEG-Signal (assoziiert mit Entspannung) bewirkten.

Die Atemanhalte-Phasen in der Box-Atmung erzeugen zusätzlich einen milden CO₂-Anstieg, der die Barorezeptoren stimuliert und die vagale Regulation weiter unterstützt. Eine Studie von Ma et al. (2017) zeigte, dass regelmäßige Atemübungen mit langsamer Frequenz die Cortisolwerte senken und die Aufmerksamkeit verbessern.`
        },
        {
          heading: 'Anwendungsbereiche',
          text: `Die Box-Atmung wird in zahlreichen Kontexten eingesetzt:

• Militär und Spezialeinheiten: Stressregulation vor und während Einsätzen
• Leistungssport: Vorbereitung auf Wettkämpfe, Erholung zwischen Sätzen
• Medizin: Angstreduktion vor Operationen, Blutdrucksenkung
• Psychotherapie: Begleitende Technik bei Angststörungen, PTBS und Panikattacken
• Unternehmensführung: Fokussierung vor wichtigen Entscheidungen und Präsentationen

Die Einfachheit der Technik ist ein wesentlicher Vorteil: Sie erfordert keine spezielle Ausrüstung, kann überall durchgeführt werden und zeigt bereits nach wenigen Minuten messbare Effekte.`
        },
        {
          heading: 'Optimale Praxis',
          text: `Für maximale Wirksamkeit wird empfohlen, die Box-Atmung in einer aufrechten, bequemen Sitzposition durchzuführen. Anfänger sollten mit 4-Sekunden-Intervallen beginnen und können die Dauer schrittweise auf 6–8 Sekunden steigern. Bereits 4 Runden (ca. 1 Minute) zeigen messbare physiologische Effekte, eine optimale Sitzung dauert 4–5 Minuten (16–20 Zyklen).`
        }
      ],
      references: [
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.',
        'Ma, X. et al. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. <i>Frontiers in Psychology</i>, 8, 874.',
        'Balban, M. Y. et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <i>Cell Reports Medicine</i>, 4(1), 100895.',
        'Gerritsen, R. J. S. & Band, G. P. H. (2018). Breath of life: the respiratory vagal stimulation model of contemplative activity. <i>Frontiers in Human Neuroscience</i>, 12, 397.',
        'Divine, M. (2014). <i>The Way of the SEAL: Think Like an Elite Warrior to Lead and Succeed</i>. Reader\'s Digest Association.'
      ]
    },
    en: {
      title: '📚 Background: Box Breathing',
      sections: [
        {
          heading: 'History and Application',
          text: `Box breathing (also called "square breathing" or "tactical breathing") is a breathing technique widely attributed to former Navy SEAL Commander Mark Divine, who popularized it under the name "Box Breathing." The technique is used by special forces, law enforcement, surgeons, and professional athletes to stay calm and focused under extreme pressure.

The principle is elegantly simple: inhale, hold, exhale, and hold again — each for the same duration (typically 4 seconds). The even, symmetrical structure gives the technique its name and makes it easy to learn.`
        },
        {
          heading: 'Effect on the Autonomic Nervous System',
          text: `Box breathing works primarily through activation of the vagus nerve, the longest cranial nerve, which plays a central role in regulating the parasympathetic nervous system. The slow, controlled breathing with breath holds stimulates "vagal tone" and shifts the balance of the autonomic nervous system from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) mode.

Multiple studies have shown that controlled slow breathing techniques increase heart rate variability (HRV) — a marker for cardiovascular health and stress resilience. Zaccaro et al. (2018) found in a systematic review that slow breathing techniques (under 10 breaths per minute) consistently produced increased HRV, reduced anxiety, and enhanced alpha-wave EEG signals (associated with relaxation).

The breath-hold phases in box breathing additionally create a mild CO₂ increase that stimulates baroreceptors and further supports vagal regulation. A study by Ma et al. (2017) showed that regular breathing exercises at slow frequencies reduce cortisol levels and improve attention.`
        },
        {
          heading: 'Application Areas',
          text: `Box breathing is used in numerous contexts:

• Military and special forces: Stress regulation before and during operations
• Competitive sports: Pre-competition preparation, recovery between sets
• Medicine: Anxiety reduction before surgeries, blood pressure reduction
• Psychotherapy: Complementary technique for anxiety disorders, PTSD, and panic attacks
• Business leadership: Focus before important decisions and presentations

The simplicity of the technique is a key advantage: it requires no special equipment, can be performed anywhere, and shows measurable effects after just a few minutes.`
        },
        {
          heading: 'Optimal Practice',
          text: `For maximum effectiveness, box breathing should be performed in an upright, comfortable sitting position. Beginners should start with 4-second intervals and can gradually increase the duration to 6–8 seconds. Even 4 rounds (approximately 1 minute) show measurable physiological effects, while an optimal session lasts 4–5 minutes (16–20 cycles).`
        }
      ],
      references: [
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.',
        'Ma, X. et al. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. <i>Frontiers in Psychology</i>, 8, 874.',
        'Balban, M. Y. et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <i>Cell Reports Medicine</i>, 4(1), 100895.',
        'Gerritsen, R. J. S. & Band, G. P. H. (2018). Breath of life: the respiratory vagal stimulation model of contemplative activity. <i>Frontiers in Human Neuroscience</i>, 12, 397.',
        'Divine, M. (2014). <i>The Way of the SEAL: Think Like an Elite Warrior to Lead and Succeed</i>. Reader\'s Digest Association.'
      ]
    },
    es: {
      title: '📚 Información: Respiración Cuadrada',
      sections: [
        {
          heading: 'Historia y aplicación',
          text: `La respiración cuadrada (también llamada "respiración en caja" o "respiración táctica") es una técnica de respiración ampliamente atribuida al ex comandante de los Navy SEALs Mark Divine. La técnica es utilizada por fuerzas especiales, fuerzas del orden, cirujanos y atletas profesionales para mantener la calma y el enfoque bajo presión extrema.

El principio es elegantemente simple: inhalar, mantener, exhalar y mantener de nuevo — cada uno durante la misma duración (típicamente 4 segundos).`
        },
        {
          heading: 'Efecto en el sistema nervioso autónomo',
          text: `La respiración cuadrada actúa principalmente a través de la activación del nervio vago, que juega un papel central en la regulación del sistema nervioso parasimpático. La respiración lenta y controlada con retenciones estimula el "tono vagal" y desplaza el equilibrio del sistema nervioso autónomo del modo simpático (lucha o huida) al parasimpático (descanso y digestión).

Múltiples estudios han demostrado que las técnicas de respiración lenta controlada aumentan la variabilidad de la frecuencia cardíaca (VFC) — un marcador de salud cardiovascular y resiliencia al estrés. Zaccaro et al. (2018) encontraron que las técnicas de respiración lenta producen consistentemente un aumento de la VFC, reducción de la ansiedad y aumento de las ondas alfa en el EEG.

Las fases de retención crean un aumento leve de CO₂ que estimula los barorreceptores y apoya la regulación vagal. Ma et al. (2017) mostraron que los ejercicios regulares de respiración lenta reducen los niveles de cortisol y mejoran la atención.`
        },
        {
          heading: 'Áreas de aplicación',
          text: `La respiración cuadrada se utiliza en numerosos contextos:

• Militar y fuerzas especiales: regulación del estrés
• Deportes: preparación para competiciones, recuperación
• Medicina: reducción de ansiedad, control de presión arterial
• Psicoterapia: técnica complementaria para trastornos de ansiedad y TEPT
• Liderazgo empresarial: enfoque antes de decisiones importantes`
        },
        {
          heading: 'Práctica óptima',
          text: `Para máxima efectividad, se recomienda realizar la respiración cuadrada en posición sentada cómoda y erguida. Los principiantes deben comenzar con intervalos de 4 segundos. Ya 4 rondas (aproximadamente 1 minuto) muestran efectos fisiológicos medibles; una sesión óptima dura 4–5 minutos.`
        }
      ],
      references: [
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.',
        'Ma, X. et al. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. <i>Frontiers in Psychology</i>, 8, 874.',
        'Balban, M. Y. et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <i>Cell Reports Medicine</i>, 4(1), 100895.',
        'Gerritsen, R. J. S. & Band, G. P. H. (2018). Breath of life: the respiratory vagal stimulation model of contemplative activity. <i>Frontiers in Human Neuroscience</i>, 12, 397.',
        'Divine, M. (2014). <i>The Way of the SEAL: Think Like an Elite Warrior to Lead and Succeed</i>. Reader\'s Digest Association.'
      ]
    },
    fr: {
      title: '📚 Informations : Respiration Carrée',
      sections: [
        {
          heading: 'Histoire et application',
          text: `La respiration carrée (aussi appelée « respiration en boîte » ou « respiration tactique ») est une technique de respiration largement attribuée à l'ancien commandant des Navy SEALs Mark Divine. La technique est utilisée par les forces spéciales, les forces de l'ordre, les chirurgiens et les athlètes professionnels pour rester calme et concentré sous une pression extrême.

Le principe est élégamment simple : inspirer, retenir, expirer et retenir à nouveau — chacun pour la même durée (typiquement 4 secondes). La structure symétrique donne son nom à la technique et la rend facile à apprendre.`
        },
        {
          heading: 'Effet sur le système nerveux autonome',
          text: `La respiration carrée agit principalement par l'activation du nerf vague, qui joue un rôle central dans la régulation du système nerveux parasympathique. La respiration lente et contrôlée avec des rétentions stimule le « tonus vagal » et déplace l'équilibre du système nerveux autonome du mode sympathique (combat ou fuite) vers le parasympathique (repos et digestion).

Plusieurs études ont montré que les techniques de respiration lente augmentent la variabilité de la fréquence cardiaque (VFC). Zaccaro et al. (2018) ont trouvé dans une revue systématique que les techniques de respiration lente produisent systématiquement une VFC accrue, une réduction de l'anxiété et une augmentation des ondes alpha à l'EEG.

Ma et al. (2017) ont montré que les exercices respiratoires réguliers à fréquence lente réduisent les niveaux de cortisol et améliorent l'attention.`
        },
        {
          heading: 'Domaines d\'application',
          text: `La respiration carrée est utilisée dans de nombreux contextes :

• Militaire et forces spéciales : régulation du stress
• Sport de compétition : préparation, récupération entre les séries
• Médecine : réduction de l'anxiété, contrôle de la pression artérielle
• Psychothérapie : technique complémentaire pour les troubles anxieux et le TSPT
• Leadership : concentration avant les décisions et présentations importantes`
        },
        {
          heading: 'Pratique optimale',
          text: `Pour une efficacité maximale, la respiration carrée doit être pratiquée en position assise droite et confortable. Les débutants doivent commencer avec des intervalles de 4 secondes. Déjà 4 cycles (environ 1 minute) montrent des effets physiologiques mesurables ; une séance optimale dure 4 à 5 minutes.`
        }
      ],
      references: [
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.',
        'Ma, X. et al. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. <i>Frontiers in Psychology</i>, 8, 874.',
        'Balban, M. Y. et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <i>Cell Reports Medicine</i>, 4(1), 100895.',
        'Gerritsen, R. J. S. & Band, G. P. H. (2018). Breath of life: the respiratory vagal stimulation model of contemplative activity. <i>Frontiers in Human Neuroscience</i>, 12, 397.',
        'Divine, M. (2014). <i>The Way of the SEAL: Think Like an Elite Warrior to Lead and Succeed</i>. Reader\'s Digest Association.'
      ]
    }
  },

  // ═══════════════════════════════════════════════════════
  // 4-7-8 BREATHING
  // ═══════════════════════════════════════════════════════
  '478': {
    de: {
      title: '📚 Hintergrund: 4-7-8 Atmung',
      sections: [
        {
          heading: 'Ursprung und Konzept',
          text: `Die 4-7-8 Atemtechnik wurde von Dr. Andrew Weil, einem integrativen Mediziner und Professor an der Universität von Arizona, entwickelt und popularisiert. Die Technik basiert auf der jahrhundertealten Pranayama-Praxis des Yoga, insbesondere auf einer Übung namens „Nadi Shodhana" (Wechselatmung), die Dr. Weil an moderne Bedürfnisse anpasste.

Das Muster ist bewusst asymmetrisch: 4 Sekunden Einatmen, 7 Sekunden Halten, 8 Sekunden Ausatmen. Die verlängerte Ausatmung (doppelt so lang wie die Einatmung) ist der Schlüssel zur Wirkung, da sie den Parasympathikus besonders stark aktiviert. Dr. Weil beschreibt die 4-7-8 Atmung als „natürliches Beruhigungsmittel für das Nervensystem" und empfiehlt sie als „die wichtigste einzelne Atemtechnik, die ich kenne".`
        },
        {
          heading: 'Wissenschaftliche Grundlage',
          text: `Die Wirksamkeit der 4-7-8 Atmung lässt sich durch mehrere wissenschaftlich fundierte Mechanismen erklären:

<strong>1. Verlängerte Exspiration und Vagusnerv-Stimulation</strong>
Die ausgedehnte Ausatemphase (8 Sekunden) aktiviert den Vagusnerv stärker als die Einatmung. Dies führt zu einer Verlangsamung der Herzfrequenz, Senkung des Blutdrucks und Förderung des parasympathischen Tonus. Studien von Laborde et al. (2022) bestätigten, dass Atemtechniken mit verlängerter Ausatmung die HRV signifikant erhöhen.

<strong>2. CO₂-Retention und Beruhigung</strong>
Das 7-sekündige Atemanhalten führt zu einem leichten Anstieg des CO₂ im Blut, was paradoxerweise beruhigend wirkt, da es die Vasodilatation fördert und die Sauerstoffabgabe an das Gewebe verbessert (Bohr-Effekt). Dieser Mechanismus unterscheidet sich grundlegend von der WHM, bei der Hyperventilation den CO₂-Spiegel senkt.

<strong>3. Kognitive Ablenkung und Achtsamkeit</strong>
Das Zählen der Sekunden (4-7-8) erzwingt eine Fokussierung auf den Atem und lenkt von angstauslösenden Gedanken ab. Dieser Mechanismus wird auch in der kognitiven Verhaltenstherapie genutzt.

Eine Studie von Vierra et al. (2022) zeigte, dass langsame Atemtechniken die Schlafqualität bei Erwachsenen mit Schlafstörungen signifikant verbessern. Insbesondere Techniken mit verlängerter Ausatmung zeigten die stärksten Effekte auf die Schlaflatenz (Einschlafzeit).`
        },
        {
          heading: 'Klinische Anwendungen',
          text: `Die 4-7-8 Atmung wird in verschiedenen klinischen Kontexten empfohlen:

• <strong>Schlafstörungen:</strong> Als natürliche Einschlafhilfe, die innerhalb von 1–2 Minuten den Übergang zum Schlaf erleichtern kann
• <strong>Angststörungen:</strong> Zur akuten Beruhigung bei Panikattacken und generalisierter Angst
• <strong>Bluthochdruck:</strong> Als ergänzende Maßnahme zur Blutdrucksenkung
• <strong>Schmerzmanagement:</strong> Zur Modulation der Schmerzwahrnehmung durch Entspannung
• <strong>Stressmanagement:</strong> Tägliche Routine zur Senkung des Basis-Stressniveaus

Dr. Weil empfiehlt, die Übung mindestens zweimal täglich durchzuführen und auf maximal 4 Zyklen pro Sitzung zu beschränken (in den ersten 4–6 Wochen). Nach regelmäßiger Praxis können 8 Zyklen pro Sitzung durchgeführt werden. Die Technik wirkt kumulativ — die Effekte verstärken sich mit regelmäßiger Praxis über Wochen und Monate.`
        },
        {
          heading: 'Praktische Tipps',
          text: `• Platziere die Zungenspitze am Gaumen direkt hinter den oberen Schneidezähnen und belasse sie dort während der gesamten Übung
• Atme lautlos durch die Nase ein
• Atme hörbar durch den Mund aus, indem du die Lippen leicht spitzt und ein „Wuusch"-Geräusch erzeugst
• Das Verhältnis 4:7:8 ist wichtiger als die absolute Dauer — wenn 4 Sekunden Einatmen zu lang sind, beginne mit 2:3,5:4 und steigere dich
• Idealerweise in sitzender Position mit geradem Rücken durchführen; bei Anwendung als Einschlafhilfe im Liegen`
        }
      ],
      references: [
        'Weil, A. (2015). <i>Breathing: The Master Key to Self Healing</i>. Sounds True Audio.',
        'Laborde, S. et al. (2022). Slow-paced breathing and cardiac vagal activity: a systematic review and meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>, 138, 104718.',
        'Vierra, J. et al. (2022). Effects of sleep-focused breathing techniques on psychophysiological measures: a systematic review. <i>Behavioral Sleep Medicine</i>, 20(4), 450–464.',
        'Jerath, R. et al. (2015). Self-regulation of breathing as a primary treatment for anxiety. <i>Applied Psychophysiology and Biofeedback</i>, 40(2), 107–115.',
        'Brown, R. P. & Gerbarg, P. L. (2012). <i>The Healing Power of the Breath</i>. Shambhala Publications.',
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.'
      ]
    },
    en: {
      title: '📚 Background: 4-7-8 Breathing',
      sections: [
        {
          heading: 'Origin and Concept',
          text: `The 4-7-8 breathing technique was developed and popularized by Dr. Andrew Weil, an integrative medicine physician and professor at the University of Arizona. The technique is based on the centuries-old pranayama practice of yoga, particularly an exercise called "Nadi Shodhana" (alternate nostril breathing), which Dr. Weil adapted for modern needs.

The pattern is deliberately asymmetric: 4 seconds inhale, 7 seconds hold, 8 seconds exhale. The extended exhalation (twice as long as the inhalation) is key to its effect, as it strongly activates the parasympathetic nervous system. Dr. Weil describes 4-7-8 breathing as "a natural tranquilizer for the nervous system" and recommends it as "the single most important breathing technique I know."`
        },
        {
          heading: 'Scientific Basis',
          text: `The effectiveness of 4-7-8 breathing can be explained through several scientifically supported mechanisms:

<strong>1. Extended Exhalation and Vagus Nerve Stimulation</strong>
The extended exhale phase (8 seconds) activates the vagus nerve more strongly than inhalation. This leads to slowing of heart rate, lowering of blood pressure, and promotion of parasympathetic tone. Studies by Laborde et al. (2022) confirmed that breathing techniques with extended exhalation significantly increase HRV.

<strong>2. CO₂ Retention and Calming</strong>
The 7-second breath hold leads to a slight increase in blood CO₂, which paradoxically has a calming effect as it promotes vasodilation and improves oxygen delivery to tissues (Bohr effect). This mechanism fundamentally differs from the WHM, where hyperventilation lowers CO₂ levels.

<strong>3. Cognitive Distraction and Mindfulness</strong>
Counting the seconds (4-7-8) forces focus on the breath and distracts from anxiety-inducing thoughts. This mechanism is also utilized in cognitive behavioral therapy.

A study by Vierra et al. (2022) showed that slow breathing techniques significantly improve sleep quality in adults with sleep disorders. Techniques with extended exhalation showed the strongest effects on sleep latency (time to fall asleep).`
        },
        {
          heading: 'Clinical Applications',
          text: `4-7-8 breathing is recommended in various clinical contexts:

• <strong>Sleep disorders:</strong> As a natural sleep aid that can facilitate the transition to sleep within 1–2 minutes
• <strong>Anxiety disorders:</strong> For acute calming during panic attacks and generalized anxiety
• <strong>Hypertension:</strong> As a complementary measure for blood pressure reduction
• <strong>Pain management:</strong> For modulating pain perception through relaxation
• <strong>Stress management:</strong> Daily routine for lowering baseline stress levels

Dr. Weil recommends performing the exercise at least twice daily, limiting to a maximum of 4 cycles per session (during the first 4–6 weeks). After regular practice, 8 cycles per session can be performed. The technique works cumulatively — effects strengthen with regular practice over weeks and months.`
        },
        {
          heading: 'Practical Tips',
          text: `• Place the tip of your tongue on the ridge behind your upper front teeth and keep it there throughout the exercise
• Inhale silently through the nose
• Exhale audibly through the mouth by slightly pursing your lips and making a "whoosh" sound
• The 4:7:8 ratio is more important than the absolute duration — if 4 seconds of inhaling is too long, start with 2:3.5:4 and build up
• Ideally performed in a seated position with a straight back; when used as a sleep aid, lying down is fine`
        }
      ],
      references: [
        'Weil, A. (2015). <i>Breathing: The Master Key to Self Healing</i>. Sounds True Audio.',
        'Laborde, S. et al. (2022). Slow-paced breathing and cardiac vagal activity: a systematic review and meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>, 138, 104718.',
        'Vierra, J. et al. (2022). Effects of sleep-focused breathing techniques on psychophysiological measures: a systematic review. <i>Behavioral Sleep Medicine</i>, 20(4), 450–464.',
        'Jerath, R. et al. (2015). Self-regulation of breathing as a primary treatment for anxiety. <i>Applied Psychophysiology and Biofeedback</i>, 40(2), 107–115.',
        'Brown, R. P. & Gerbarg, P. L. (2012). <i>The Healing Power of the Breath</i>. Shambhala Publications.',
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.'
      ]
    },
    es: {
      title: '📚 Información: Respiración 4-7-8',
      sections: [
        {
          heading: 'Origen y concepto',
          text: `La técnica de respiración 4-7-8 fue desarrollada y popularizada por el Dr. Andrew Weil, médico de medicina integrativa y profesor en la Universidad de Arizona. La técnica se basa en la práctica milenaria de pranayama del yoga, particularmente un ejercicio llamado "Nadi Shodhana" (respiración alterna), que el Dr. Weil adaptó a las necesidades modernas.

El patrón es deliberadamente asimétrico: 4 segundos de inhalación, 7 segundos de retención, 8 segundos de exhalación. La exhalación extendida (el doble de la inhalación) es clave para su efecto. El Dr. Weil la describe como "un tranquilizante natural para el sistema nervioso".`
        },
        {
          heading: 'Base científica',
          text: `La efectividad de la respiración 4-7-8 se explica por varios mecanismos respaldados científicamente:

<strong>1. Exhalación extendida y estimulación del nervio vago</strong>
La fase de exhalación extendida activa el nervio vago más fuertemente que la inhalación, reduciendo la frecuencia cardíaca y la presión arterial. Laborde et al. (2022) confirmaron que las técnicas con exhalación prolongada aumentan significativamente la VFC.

<strong>2. Retención de CO₂ y calma</strong>
La retención de 7 segundos produce un ligero aumento de CO₂ en sangre, que paradójicamente tiene un efecto calmante al promover la vasodilatación y mejorar la entrega de oxígeno a los tejidos (efecto Bohr).

<strong>3. Distracción cognitiva y atención plena</strong>
Contar los segundos (4-7-8) fuerza la concentración en la respiración y distrae de pensamientos ansiógenos.

Vierra et al. (2022) mostraron que las técnicas de respiración lenta mejoran significativamente la calidad del sueño, especialmente las técnicas con exhalación prolongada.`
        },
        {
          heading: 'Aplicaciones clínicas',
          text: `La respiración 4-7-8 se recomienda para:

• <strong>Trastornos del sueño:</strong> Como ayuda natural para conciliar el sueño en 1–2 minutos
• <strong>Trastornos de ansiedad:</strong> Para calma aguda durante ataques de pánico
• <strong>Hipertensión:</strong> Como medida complementaria para reducir la presión arterial
• <strong>Manejo del dolor:</strong> Para modular la percepción del dolor
• <strong>Manejo del estrés:</strong> Rutina diaria para reducir el nivel base de estrés

El Dr. Weil recomienda realizarla al menos dos veces al día, limitándola a 4 ciclos por sesión durante las primeras 4–6 semanas.`
        },
        {
          heading: 'Consejos prácticos',
          text: `• Coloca la punta de la lengua en el paladar detrás de los dientes frontales superiores
• Inhala silenciosamente por la nariz
• Exhala audiblemente por la boca con un sonido "fuuush"
• La proporción 4:7:8 es más importante que la duración absoluta
• Idealmente sentado con espalda recta; acostado si se usa para dormir`
        }
      ],
      references: [
        'Weil, A. (2015). <i>Breathing: The Master Key to Self Healing</i>. Sounds True Audio.',
        'Laborde, S. et al. (2022). Slow-paced breathing and cardiac vagal activity: a systematic review and meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>, 138, 104718.',
        'Vierra, J. et al. (2022). Effects of sleep-focused breathing techniques on psychophysiological measures: a systematic review. <i>Behavioral Sleep Medicine</i>, 20(4), 450–464.',
        'Jerath, R. et al. (2015). Self-regulation of breathing as a primary treatment for anxiety. <i>Applied Psychophysiology and Biofeedback</i>, 40(2), 107–115.',
        'Brown, R. P. & Gerbarg, P. L. (2012). <i>The Healing Power of the Breath</i>. Shambhala Publications.',
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.'
      ]
    },
    fr: {
      title: '📚 Informations : Respiration 4-7-8',
      sections: [
        {
          heading: 'Origine et concept',
          text: `La technique de respiration 4-7-8 a été développée et popularisée par le Dr Andrew Weil, médecin en médecine intégrative et professeur à l'Université d'Arizona. La technique est basée sur la pratique ancestrale du pranayama du yoga, en particulier un exercice appelé « Nadi Shodhana » (respiration alternée), que le Dr Weil a adapté aux besoins modernes.

Le schéma est délibérément asymétrique : 4 secondes d'inspiration, 7 secondes de rétention, 8 secondes d'expiration. L'expiration prolongée (deux fois plus longue que l'inspiration) est la clé de son effet. Le Dr Weil la décrit comme « un tranquillisant naturel pour le système nerveux ».`
        },
        {
          heading: 'Base scientifique',
          text: `L'efficacité de la respiration 4-7-8 s'explique par plusieurs mécanismes scientifiquement étayés :

<strong>1. Expiration prolongée et stimulation du nerf vague</strong>
La phase d'expiration prolongée active le nerf vague plus fortement que l'inspiration, ralentissant le rythme cardiaque et abaissant la pression artérielle. Laborde et al. (2022) ont confirmé que les techniques avec expiration prolongée augmentent significativement la VFC.

<strong>2. Rétention de CO₂ et apaisement</strong>
La rétention de 7 secondes produit une légère augmentation du CO₂ sanguin, qui a paradoxalement un effet apaisant en favorisant la vasodilatation et en améliorant l'apport d'oxygène aux tissus (effet Bohr).

<strong>3. Distraction cognitive et pleine conscience</strong>
Compter les secondes (4-7-8) force la concentration sur la respiration et distrait des pensées anxiogènes.

Vierra et al. (2022) ont montré que les techniques de respiration lente améliorent significativement la qualité du sommeil chez les adultes souffrant de troubles du sommeil.`
        },
        {
          heading: 'Applications cliniques',
          text: `La respiration 4-7-8 est recommandée pour :

• <strong>Troubles du sommeil :</strong> Comme aide naturelle à l'endormissement en 1–2 minutes
• <strong>Troubles anxieux :</strong> Pour le calme aigu lors d'attaques de panique
• <strong>Hypertension :</strong> Comme mesure complémentaire pour la réduction de la pression artérielle
• <strong>Gestion de la douleur :</strong> Pour moduler la perception de la douleur
• <strong>Gestion du stress :</strong> Routine quotidienne pour réduire le niveau de stress basal

Le Dr Weil recommande de la pratiquer au moins deux fois par jour, en la limitant à 4 cycles par séance pendant les 4 à 6 premières semaines.`
        },
        {
          heading: 'Conseils pratiques',
          text: `• Placez le bout de la langue sur la crête derrière les incisives supérieures
• Inspirez silencieusement par le nez
• Expirez audiblement par la bouche avec un son « wouch »
• Le rapport 4:7:8 est plus important que la durée absolue
• Idéalement en position assise, dos droit ; allongé si utilisé pour dormir`
        }
      ],
      references: [
        'Weil, A. (2015). <i>Breathing: The Master Key to Self Healing</i>. Sounds True Audio.',
        'Laborde, S. et al. (2022). Slow-paced breathing and cardiac vagal activity: a systematic review and meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>, 138, 104718.',
        'Vierra, J. et al. (2022). Effects of sleep-focused breathing techniques on psychophysiological measures: a systematic review. <i>Behavioral Sleep Medicine</i>, 20(4), 450–464.',
        'Jerath, R. et al. (2015). Self-regulation of breathing as a primary treatment for anxiety. <i>Applied Psychophysiology and Biofeedback</i>, 40(2), 107–115.',
        'Brown, R. P. & Gerbarg, P. L. (2012). <i>The Healing Power of the Breath</i>. Shambhala Publications.',
        'Zaccaro, A. et al. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <i>Frontiers in Human Neuroscience</i>, 12, 353.'
      ]
    }
  }
};

/** Render research HTML for a given exercise type */
function renderResearchHTML(exerciseType) {
  const lang = getLang();
  const data = RESEARCH[exerciseType] && RESEARCH[exerciseType][lang]
            || RESEARCH[exerciseType] && RESEARCH[exerciseType]['de'];
  if (!data) return '<p>No research data available.</p>';

  let html = `<h2 class="research-title">${data.title}</h2>`;

  for (const section of data.sections) {
    html += `<h3 class="research-heading">${section.heading}</h3>`;
    // Convert newlines to paragraphs, preserve HTML tags like <strong>
    const paragraphs = section.text.split('\n\n').map(p => p.trim()).filter(Boolean);
    for (const p of paragraphs) {
      // Detect bullet lists (lines starting with •)
      if (p.includes('\n•') || p.startsWith('•')) {
        const lines = p.split('\n');
        let listStarted = false;
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('•')) {
            if (!listStarted) { html += '<ul class="research-list">'; listStarted = true; }
            html += `<li>${trimmed.substring(1).trim()}</li>`;
          } else {
            if (listStarted) { html += '</ul>'; listStarted = false; }
            if (trimmed) html += `<p>${trimmed}</p>`;
          }
        }
        if (listStarted) html += '</ul>';
      } else {
        html += `<p>${p.replace(/\n/g, '<br>')}</p>`;
      }
    }
  }

  // References
  html += `<h3 class="research-heading">${lang === 'de' ? 'Quellenverzeichnis' : lang === 'fr' ? 'Références' : lang === 'es' ? 'Referencias' : 'References'}</h3>`;
  html += '<ol class="research-refs">';
  for (const ref of data.references) {
    html += `<li>${ref}</li>`;
  }
  html += '</ol>';

  return html;
}

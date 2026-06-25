import { createCurriculumContent, type CurriculumTopicContent } from "./types";

export const KS2_TOPIC_CONTENT: CurriculumTopicContent[] = [
  createCurriculumContent({
    slug: "scientific-enquiry",
    overview:
      "Scientific enquiry is the set of skills pupils use to investigate the world scientifically. At KS2, children learn to ask testable questions, plan fair tests by controlling variables, make careful observations and measurements, record results clearly, and draw evidence-based conclusions. These working scientifically skills underpin every other science topic and are assessed throughout primary school.",
    keyConcepts: [
      {
        term: "Scientific question",
        definition:
          "A question that can be answered through observation or investigation, such as 'Does the height of a ramp affect how far a toy car travels?' It must be testable and not answered by opinion alone.",
      },
      {
        term: "Variable",
        definition:
          "Any factor in an investigation that can change. The independent variable is what you change on purpose; the dependent variable is what you measure; control variables are kept the same to make the test fair.",
      },
      {
        term: "Fair test",
        definition:
          "An investigation where only one variable is changed at a time while all other conditions stay the same. This helps you find out which factor actually causes the result.",
      },
      {
        term: "Prediction",
        definition:
          "A statement about what you think will happen in an investigation, based on scientific knowledge or prior observations. It is not a guess — it should give a reason.",
      },
      {
        term: "Observation",
        definition:
          "Noticing and describing what happens using the senses or measuring equipment. Accurate observations are the foundation of reliable scientific data.",
      },
      {
        term: "Measurement",
        definition:
          "Finding the size, amount, or degree of something using standard units such as centimetres, grams, degrees Celsius, or seconds. Repeated measurements improve reliability.",
      },
      {
        term: "Conclusion",
        definition:
          "A statement explaining what the results show, linked back to the original question and prediction. A good conclusion uses evidence from the data, not personal preference.",
      },
      {
        term: "Evaluation",
        definition:
          "Thinking critically about how well the investigation worked, including whether results were reliable, if anything unexpected happened, and how the method could be improved.",
      },
    ],
    sections: [
      {
        heading: "Planning a fair investigation",
        body:
          "Before starting an experiment, identify what you want to find out and list the variables involved. Decide which variable you will change (independent) and which you will measure (dependent). Keep everything else the same — for example, if testing which material keeps water warmest, use the same volume of water, the same starting temperature, and the same type of container. Write a clear method so someone else could repeat your test. Include the equipment you need and the order of steps.",
      },
      {
        heading: "Recording and presenting results",
        body:
          "Results should be recorded in tables with headings that include units, such as 'Time (minutes)' and 'Temperature (°C)'. Take repeat readings where possible and calculate averages to improve accuracy. Bar charts and line graphs help show patterns — use a suitable scale, label both axes, and give the graph a title. Patterns might include 'as X increases, Y increases' or 'the steepest change happened in the first five minutes'.",
      },
      {
        heading: "Drawing conclusions and evaluating",
        body:
          "Look at your data and decide what it shows. Refer to specific results — for example, 'Material A stayed warmest for 30 minutes, so it is the best insulator in this test.' Say whether your prediction was correct and explain why, using scientific ideas. In your evaluation, note any problems such as inaccurate measurements, variables that were hard to control, or results that did not match what you expected. Suggest one realistic improvement.",
      },
    ],
    examTips: [
      "In SATs-style questions, always name the independent and dependent variables when asked about a fair test.",
      "When drawing conclusions, quote data from the table or graph — do not just say 'it worked' without evidence.",
      "For evaluation questions, suggest a specific improvement (e.g. 'use a thermometer with smaller divisions') rather than 'do it better'.",
    ],
    higherConcepts: [
      {
        term: "Reliability",
        definition:
          "How consistent results are when a test is repeated. Taking multiple readings and calculating a mean makes data more reliable.",
      },
      {
        term: "Accuracy",
        definition:
          "How close a measurement is to the true value. Using well-calibrated equipment and reading scales carefully improves accuracy.",
      },
      {
        term: "Anomaly",
        definition:
          "A result that does not fit the general pattern of the data, often caused by a mistake or an uncontrolled variable. Anomalies may be excluded when calculating a mean.",
      },
      {
        term: "Correlation",
        definition:
          "When two variables appear to change together in a pattern. Correlation does not always mean one variable caused the other — further testing may be needed.",
      },
      {
        term: "Secondary source",
        definition:
          "Information collected by other scientists, such as books, websites, or research papers. It must be evaluated for reliability and bias.",
      },
    ],
    higherSections: [
      {
        heading: "Designing investigations with precision",
        body:
          "Upper KS2 pupils should plan investigations that produce data precise enough to spot patterns. This means choosing appropriate equipment — for example, a stopwatch rather than counting 'one Mississippi' — and deciding how many repeats are needed. When comparing materials or conditions, use a control group or baseline measurement so you have something to compare against. Range finders help: test several values of the independent variable (e.g. ramp heights of 10 cm, 20 cm, 30 cm) rather than just two.",
      },
      {
        heading: "Interpreting data critically",
        body:
          "Advanced enquiry involves reading graphs and tables carefully to identify trends, describe the strength of a relationship, and spot anomalies. Pupils should distinguish between results that support a prediction and those that contradict it, and explain possible reasons for unexpected data. They should also recognise when an investigation cannot answer the question — for example, if too many variables were changed at once — and propose a redesigned fair test.",
      },
    ],
    higherExamTips: [
      "Challenge questions may ask you to identify an anomaly in a data set and explain why it should be repeated or ignored.",
      "Be ready to explain the difference between reliability (repeatable) and accuracy (close to the true value).",
      "When evaluating, link weaknesses in the method directly to how they could have affected the results.",
    ],
  }),

  createCurriculumContent({
    slug: "classification",
    overview:
      "Classification is the process of sorting living things into groups based on shared characteristics. At KS2, pupils learn the characteristics of living things (MRS GREN), use classification keys to identify organisms, and understand that micro-organisms are living things too small to see without a microscope. This builds the foundation for understanding biodiversity and the relationships between species.",
    keyConcepts: [
      {
        term: "Living thing",
        definition:
          "An organism that shows the seven life processes: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition (remembered as MRS GREN).",
      },
      {
        term: "Classification",
        definition:
          "Sorting living things into groups based on similarities in their features, such as whether they have backbones, how they reproduce, or what they eat.",
      },
      {
        term: "Classification key",
        definition:
          "A branching diagram or series of yes/no questions used to identify an unknown organism by answering questions about its features step by step.",
      },
      {
        term: "Vertebrate",
        definition:
          "An animal with a backbone (spine) inside its body. Vertebrates include fish, amphibians, reptiles, birds, and mammals.",
      },
      {
        term: "Invertebrate",
        definition:
          "An animal without a backbone. Invertebrates include insects, spiders, worms, molluscs, and crustaceans — they make up the vast majority of animal species.",
      },
      {
        term: "Micro-organism",
        definition:
          "A living thing too small to see without a microscope, including bacteria, viruses, fungi, and some protists. Many are harmless; some cause disease or help decomposition.",
      },
      {
        term: "Bacteria",
        definition:
          "Single-celled micro-organisms found almost everywhere. Some bacteria cause illness, but many are useful — for example, in yoghurt-making and breaking down waste.",
      },
      {
        term: "Fungi",
        definition:
          "Living things such as mushrooms and moulds that reproduce using spores. They are neither plants nor animals and often feed by breaking down dead material.",
      },
    ],
    sections: [
      {
        heading: "Characteristics of living things",
        body:
          "All living things carry out the same basic life processes. They move (even plants move slowly towards light), respire (release energy from food), respond to their environment (sensitivity), grow, reproduce, excrete waste, and take in nutrients. Non-living things may show one or two of these features — a car moves but does not grow or reproduce — so scientists use the full set of characteristics to decide if something is alive.",
      },
      {
        heading: "Grouping animals and plants",
        body:
          "Animals can be grouped into vertebrates and invertebrates, then into smaller groups such as mammals (warm-blooded, hair, live young, milk), birds (feathers, beaks, eggs), reptiles (scales, cold-blooded), amphibians (moist skin, live in water and on land), and fish (gills, fins, scales). Plants can be grouped into flowering plants and non-flowering plants such as ferns and mosses. Grouping helps scientists study and compare species.",
      },
      {
        heading: "Using classification keys",
        body:
          "A classification key asks a series of questions with two possible answers at each step, such as 'Does it have wings? Yes → go to 2; No → go to 5.' By following the correct path, you can identify an organism. Keys must use clear, observable features that anyone can check — colour alone is not always reliable. Practising with local wildlife helps pupils see how classification works in the real world.",
      },
    ],
    examTips: [
      "Remember MRS GREN for the seven life processes — exam questions often ask you to match a process to a description.",
      "When using a classification key, read each question carefully and only use features you can actually observe.",
      "Know the main differences between vertebrate groups — mammals have hair and feed young with milk; birds have feathers.",
    ],
    higherConcepts: [
      {
        term: "Species",
        definition:
          "A group of organisms that can reproduce together to produce fertile offspring. Members of a species share similar characteristics.",
      },
      {
        term: "Binomial naming",
        definition:
          "The scientific system of giving each species two Latin names — genus and species — such as Homo sapiens for humans. It avoids confusion between common names.",
      },
      {
        term: "Virus",
        definition:
          "A tiny particle that can only reproduce inside living cells. Viruses are often studied alongside micro-organisms but are not considered fully alive because they cannot reproduce independently.",
      },
      {
        term: "Decomposer",
        definition:
          "A micro-organism, such as a bacterium or fungus, that breaks down dead plants and animals, returning nutrients to the soil.",
      },
      {
        term: "Taxonomy",
        definition:
          "The science of naming and classifying organisms into a hierarchy: kingdom, phylum, class, order, family, genus, and species.",
      },
    ],
    higherSections: [
      {
        heading: "Micro-organisms in everyday life",
        body:
          "Micro-organisms are everywhere — in soil, water, on our skin, and in our digestive systems. Beneficial bacteria help digest food and make foods such as bread, cheese, and yoghurt. Yeast is a fungus used in baking. However, some micro-organisms cause disease: bacteria can cause sore throats, viruses cause colds and flu, and fungi can cause athlete's foot. Understanding that micro-organisms are living helps pupils follow hygiene advice such as handwashing and covering coughs.",
      },
      {
        heading: "Building accurate classification keys",
        body:
          "Pupils in Years 5 and 6 should be able to construct their own keys for a small set of organisms. Each question must split the remaining organisms into two groups with no overlap. Start with a feature that divides the group roughly in half. Avoid questions that only apply to one organism until the final steps. Testing the key on a classmate helps find errors — if two different organisms end up at the same answer, the key needs fixing.",
      },
    ],
    higherExamTips: [
      "Challenge questions may ask you to design a classification key — use yes/no questions based on clear physical features.",
      "Know examples of useful and harmful micro-organisms and explain their role in the environment.",
      "Distinguish between fungi and plants: fungi do not photosynthesise and reproduce using spores, not seeds.",
    ],
  }),

  createCurriculumContent({
    slug: "habitats-adaptation",
    overview:
      "A habitat is the place where an organism lives, providing food, water, shelter, and space. Pupils learn how plants and animals are adapted to survive in different habitats, how food chains show the flow of energy, and how changes to the environment can affect the organisms that live there. This topic connects ecology, conservation, and the interdependence of living things.",
    keyConcepts: [
      {
        term: "Habitat",
        definition:
          "The natural home of an organism — the place where it finds everything it needs to survive, such as a woodland, pond, desert, or coastal rock pool.",
      },
      {
        term: "Adaptation",
        definition:
          "A feature or behaviour that helps an organism survive and reproduce in its habitat. Adaptations develop over many generations through natural selection.",
      },
      {
        term: "Structural adaptation",
        definition:
          "A physical feature of an organism's body that aids survival, such as thick fur in Arctic animals, camouflage colouring, or long roots in desert plants.",
      },
      {
        term: "Behavioural adaptation",
        definition:
          "An action an organism takes to survive, such as migration, hibernation, hunting at night, or living in groups for protection.",
      },
      {
        term: "Food chain",
        definition:
          "A diagram showing how energy passes from one living thing to another. It always starts with a producer (plant) and moves through consumers. Arrows show the direction of energy transfer.",
      },
      {
        term: "Producer",
        definition:
          "A green plant or alga that makes its own food through photosynthesis. Producers are the start of every food chain because they capture energy from sunlight.",
      },
      {
        term: "Consumer",
        definition:
          "An animal that eats other organisms for energy. Primary consumers eat plants; secondary consumers eat other animals; predators hunt prey.",
      },
      {
        term: "Environmental change",
        definition:
          "Any alteration to a habitat — natural (floods, droughts) or human-caused (deforestation, pollution) — that can affect which organisms survive and reproduce.",
      },
    ],
    sections: [
      {
        heading: "Habitats and local ecosystems",
        body:
          "Different habitats support different communities of organisms. A pond habitat provides water, aquatic plants, and food for frogs, fish, and insects. Woodland habitats offer trees for shelter, leaf litter for decomposers, and food for birds and mammals. Pupils can survey local habitats using pitfall traps, pond nets, and identification keys. Every organism plays a role — even decomposers such as worms and fungi are essential for recycling nutrients.",
      },
      {
        heading: "Adaptations for survival",
        body:
          "Organisms are suited to the conditions in their habitat. Arctic foxes have white fur for camouflage in snow and thick coats for warmth. Cacti store water in fleshy stems and have spines instead of leaves to reduce water loss. Camouflage helps predators catch prey and helps prey avoid being eaten. Some animals are active at night (nocturnal) to avoid heat or predators. These adaptations are the result of millions of years of evolution.",
      },
      {
        heading: "Food chains and environmental impact",
        body:
          "A simple food chain might be: grass → rabbit → fox. If rabbits decrease, foxes have less food and their numbers may fall too. Removing one species can affect the whole chain. Human activities such as building roads, farming, and pollution can destroy habitats and threaten species. Conservation efforts — nature reserves, replanting trees, reducing plastic waste — help protect habitats and the organisms that depend on them.",
      },
    ],
    examTips: [
      "In food chains, arrows point from the organism that is eaten to the one that eats it — they show energy flow, not 'who eats whom' direction.",
      "Give specific examples of adaptations linked to a named habitat, e.g. 'a camel stores fat in its hump for energy in the desert'.",
      "Explain how a change at one point in a food chain affects other organisms — trace the knock-on effects.",
    ],
    higherConcepts: [
      {
        term: "Food web",
        definition:
          "A network of interconnected food chains showing that most organisms eat more than one type of food and are eaten by more than one predator.",
      },
      {
        term: "Predator-prey relationship",
        definition:
          "The interaction where one animal (predator) hunts another (prey). Changes in prey numbers affect predator numbers and vice versa, often in repeating cycles.",
      },
      {
        term: "Camouflage",
        definition:
          "Colouring or patterns that help an organism blend into its surroundings, making it harder for predators or prey to spot them.",
      },
      {
        term: "Endangered species",
        definition:
          "A species at risk of extinction because its population has fallen dramatically, often due to habitat loss, hunting, or climate change.",
      },
      {
        term: "Interdependence",
        definition:
          "The way organisms in a habitat rely on each other — plants produce oxygen and food, animals pollinate flowers and spread seeds, decomposers recycle nutrients.",
      },
    ],
    higherSections: [
      {
        heading: "Analysing food webs",
        body:
          "Food webs are more realistic than single food chains because animals rarely eat only one thing. If grasshoppers are removed from a web, the birds that eat them may switch to other insects, but those insect populations may then fall. Pupils should practise tracing multiple pathways through a food web and predicting the effects of removing or adding a species. This develops systems thinking about ecosystems.",
      },
      {
        heading: "Human impact and conservation",
        body:
          "Human activities are the main cause of habitat destruction worldwide. Deforestation removes trees that produce oxygen and shelter wildlife. Plastic pollution harms marine animals that mistake it for food. Climate change alters temperatures and rainfall, forcing species to move or adapt. Conservation strategies include protected areas, breeding programmes for endangered species, sustainable farming, and reducing carbon emissions. Pupils can take action locally through wildlife gardens, litter picks, and reducing waste.",
      },
    ],
    higherExamTips: [
      "Food web questions often ask what happens if one species disappears — trace at least two connections in your answer.",
      "Distinguish between structural and behavioural adaptations and give one example of each for the same animal.",
      "Link human activity to a specific environmental change and explain the effect on a named organism.",
    ],
  }),

  createCurriculumContent({
    slug: "nutrition",
    overview:
      "Nutrition is about the food humans need to stay healthy and active. KS2 pupils learn the main food groups, what a balanced diet looks like, and how different nutrients support growth, energy, and body repair. They also study teeth — their types, functions, and how to keep them healthy. This topic links directly to the digestive system and healthy lifestyle education.",
    keyConcepts: [
      { term: "Balanced diet", definition: "Eating the right amounts of different food groups to provide all the nutrients the body needs for health, growth, and energy — not too much of any one type." },
      { term: "Carbohydrates", definition: "Nutrients found in foods such as bread, pasta, rice, and potatoes that provide energy for the body. They are the body's main fuel source." },
      { term: "Proteins", definition: "Nutrients found in meat, fish, eggs, beans, and nuts that are needed for growth, repair of body tissues, and building muscles." },
      { term: "Fats", definition: "Nutrients that provide energy and help the body absorb some vitamins. Found in oils, butter, cheese, and oily fish. Small amounts are needed; too much can be unhealthy." },
      { term: "Vitamins and minerals", definition: "Nutrients needed in small amounts for the body to work properly. Vitamin C supports the immune system; calcium strengthens bones; iron helps make healthy blood." },
      { term: "Fibre", definition: "A carbohydrate found in fruit, vegetables, and whole grains that the body cannot digest. It helps food move through the digestive system and keeps the gut healthy." },
      { term: "Incisor", definition: "Front teeth with a sharp, flat edge used for biting and cutting food into smaller pieces." },
      { term: "Molar", definition: "Large, flat teeth at the back of the mouth used for grinding and chewing food into small pieces ready for swallowing." },
    ],
    sections: [
      { heading: "Food groups and nutrients", body: "The Eatwell Guide shows how to balance meals across fruit and vegetables, starchy carbohydrates, proteins, dairy (or alternatives), and small amounts of oils and spreads. Each group provides different nutrients. Carbohydrates give energy for activity and concentration. Proteins build and repair muscles and organs. Fats store energy and insulate the body. Vitamins and minerals support specific functions — vitamin D helps bones absorb calcium; iron prevents tiredness." },
      { heading: "Balanced diets for different people", body: "Everyone needs a balanced diet, but amounts vary. Children need plenty of protein and calcium for growth. Athletes need extra carbohydrates for energy. Pregnant women need additional iron and folic acid. People with allergies or dietary choices (vegetarian, vegan) must find alternative sources of key nutrients — for example, beans and lentils provide protein without meat." },
      { heading: "Teeth and dental health", body: "Humans have four types of teeth: incisors (cutting), canines (tearing), premolars and molars (grinding). Baby teeth (milk teeth) are replaced by adult teeth from about age six. Plaque is a sticky layer of bacteria on teeth that produces acid, causing decay. Brushing twice daily with fluoride toothpaste, limiting sugary snacks, and visiting the dentist help keep teeth healthy." },
    ],
    examTips: [
      "Match nutrients to their functions — carbohydrates for energy, protein for growth and repair, calcium for strong bones.",
      "Know the four types of teeth and what each is used for in mechanical digestion.",
      "Explain what makes a diet 'balanced' — variety and correct proportions, not just eating fruit and vegetables.",
    ],
    higherConcepts: [
      { term: "Malnutrition", definition: "When the body does not get the right balance of nutrients — either too little (undernutrition) or too much (overnutrition), leading to health problems." },
      { term: "Calorie", definition: "A unit measuring the energy food provides. Different activities burn different amounts of energy, which must be replaced through food." },
      { term: "Enamel", definition: "The hard, outer layer of a tooth that protects the softer dentine underneath. It is the hardest substance in the human body but can be damaged by acid." },
      { term: "Dietary fibre", definition: "The part of plant foods that passes through the gut without being digested, helping prevent constipation and supporting gut bacteria." },
      { term: "Deficiency disease", definition: "An illness caused by lacking a specific nutrient, such as scurvy (lack of vitamin C) or rickets (lack of vitamin D)." },
    ],
    higherSections: [
      { heading: "Reading food labels", body: "Food packaging shows nutritional information per 100 g or per serving, including energy (kJ/kcal), fat, saturates, sugars, and salt. Pupils should compare products and recognise that 'low fat' does not always mean healthy if sugar content is high. Understanding labels supports informed choices about diet and helps identify hidden sugars in foods such as sauces and cereals." },
      { heading: "Nutrition across the life cycle", body: "Nutritional needs change throughout life. Babies need milk for rapid growth. Teenagers need extra calcium and iron during growth spurts. Older adults may need more vitamin D and less salt. Athletes time carbohydrate intake around exercise for performance. Linking nutrition to life stages shows why a single diet plan does not suit everyone." },
    ],
    higherExamTips: [
      "Compare two food labels and explain which is healthier, citing specific values for sugar, fat, or salt.",
      "Explain how a vegetarian can obtain enough protein, iron, and vitamin B12 from plant-based sources.",
      "Describe the process of tooth decay from plaque formation to cavity, and how it can be prevented.",
    ],
  }),

  createCurriculumContent({
    slug: "skeleton-muscles",
    overview:
      "The human skeleton provides support, protection, and a framework for movement, while muscles pull on bones to create motion. KS2 pupils learn the names and functions of major bones, how muscles work in pairs, and the types of joints that allow different movements. This topic builds understanding of how the body is structured for physical activity.",
    keyConcepts: [
      { term: "Skeleton", definition: "The framework of bones inside the body that supports it, protects vital organs, allows movement, and produces blood cells in the bone marrow." },
      { term: "Skull", definition: "The bony structure enclosing and protecting the brain. It is made of fused bones and includes the jawbone for chewing." },
      { term: "Ribcage", definition: "Bones surrounding the chest that protect the heart and lungs. The ribs are flexible enough to expand when breathing." },
      { term: "Femur", definition: "The thigh bone — the longest and strongest bone in the human body. It connects the hip to the knee." },
      { term: "Muscle", definition: "A tissue that can contract (shorten) and relax to create movement. Muscles are attached to bones by tendons." },
      { term: "Antagonistic muscles", definition: "A pair of muscles that work in opposition — when one contracts, the other relaxes. The biceps and triceps in the arm are a classic example." },
      { term: "Tendon", definition: "A tough, flexible cord of tissue that attaches muscle to bone, transmitting the force of muscle contraction to move the skeleton." },
      { term: "Joint", definition: "A place where two or more bones meet. Joints allow movement (e.g. knee, elbow) or provide stability (e.g. skull plates)." },
    ],
    sections: [
      { heading: "Functions of the skeleton", body: "The skeleton has four main jobs: support (holds the body upright), protection (skull protects brain, ribcage protects heart and lungs, backbone protects spinal cord), movement (bones act as levers when muscles pull on them), and blood cell production (marrow inside bones makes red and white blood cells). An adult human has 206 bones, connected at joints." },
      { heading: "How muscles create movement", body: "Muscles can only pull — they cannot push. To move a bone in two directions, antagonistic muscle pairs are needed. To bend the arm, the biceps contracts (shortens) while the triceps relaxes. To straighten it, the triceps contracts and the biceps relaxes. Tendons attach muscles to bones at either side of a joint. Regular exercise strengthens muscles and keeps joints flexible." },
      { heading: "Types of joints", body: "Ball-and-socket joints (hip, shoulder) allow movement in all directions — rotation and swinging. Hinge joints (knee, elbow) allow movement in one direction only, like a door hinge. Fixed joints (skull) do not move. The type of joint determines the range of movement possible at that part of the body." },
    ],
    examTips: [
      "Remember muscles work in pairs — describe both the contracting and relaxing muscle when explaining arm movement.",
      "Link skeleton functions to specific bones: skull → protects brain, ribcage → protects heart and lungs.",
      "Know the difference between ball-and-socket and hinge joints and give an example of each.",
    ],
    higherConcepts: [
      { term: "Vertebrae", definition: "The 33 bones of the spine (backbone) that protect the spinal cord and allow the back to bend and twist." },
      { term: "Ligament", definition: "Strong tissue that connects bone to bone at a joint, providing stability and preventing excessive movement." },
      { term: "Cartilage", definition: "Smooth, rubbery tissue covering the ends of bones at joints, reducing friction and absorbing shock during movement." },
      { term: "Voluntary muscle", definition: "Muscle you can consciously control, such as skeletal muscles in the arms and legs." },
      { term: "Involuntary muscle", definition: "Muscle that works automatically without conscious thought, such as the heart muscle and muscles in the digestive system." },
    ],
    higherSections: [
      { heading: "The spine and posture", body: "The vertebral column is made of vertebrae separated by discs of cartilage that act as shock absorbers. Good posture keeps the spine aligned, reducing strain on muscles and ligaments. Poor posture from slouching or heavy bags can cause back pain. The spine has natural curves that help distribute body weight and protect the spinal cord, which carries nerve signals between the brain and body." },
      { heading: "Exercise and the musculoskeletal system", body: "Weight-bearing exercise strengthens bones by stimulating bone growth. Resistance exercise builds muscle mass and strength. Stretching maintains flexibility at joints. Without regular activity, muscles weaken and joints stiffen. Athletes train specific muscle groups for their sport — swimmers develop shoulder muscles, runners strengthen leg muscles. Rest and nutrition (especially protein and calcium) support recovery and growth." },
    ],
    higherExamTips: [
      "Explain the full sequence of arm movement: brain sends signal → biceps contracts → tendon pulls bone → arm bends.",
      "Compare the range of movement at a hinge joint versus a ball-and-socket joint with labelled examples.",
      "Describe how the skeleton and muscles work together as a lever system when kicking a ball.",
    ],
  }),

  createCurriculumContent({
    slug: "digestive-system",
    overview:
      "The digestive system breaks down food into small molecules that the body can absorb and use. Pupils learn the journey of food from mouth to anus, the roles of major organs, and how enzymes help break large food molecules into absorbable nutrients. This topic connects nutrition to how the body actually uses the food we eat.",
    keyConcepts: [
      { term: "Digestion", definition: "The process of breaking down large, insoluble food molecules into smaller, soluble molecules that can pass into the blood through the walls of the small intestine." },
      { term: "Oesophagus", definition: "The muscular tube connecting the mouth to the stomach. Muscles in its walls contract in waves (peristalsis) to push food downwards." },
      { term: "Stomach", definition: "A muscular bag that churns food and mixes it with acid and enzymes to begin breaking down proteins. It can store food for several hours." },
      { term: "Small intestine", definition: "A long, coiled tube where most digestion and absorption of nutrients into the blood takes place. It is about 6 metres long in adults." },
      { term: "Large intestine", definition: "The wider, shorter tube after the small intestine where water is absorbed from undigested food, forming solid waste (faeces)." },
      { term: "Enzyme", definition: "A biological substance that speeds up the breakdown of food molecules. Different enzymes break down carbohydrates, proteins, and fats." },
      { term: "Absorption", definition: "The process by which digested nutrients pass through the wall of the small intestine into the bloodstream to be carried to cells around the body." },
      { term: "Villi", definition: "Tiny finger-like projections lining the small intestine that increase the surface area for faster absorption of nutrients into the blood." },
    ],
    sections: [
      { heading: "The journey of food", body: "Digestion begins in the mouth, where teeth mechanically break food into smaller pieces and saliva starts chemical digestion of starch. Food is swallowed and travels down the oesophagus to the stomach. In the stomach, acid and enzymes break down proteins. Partially digested food then enters the small intestine, where bile from the liver and enzymes from the pancreas complete digestion. Nutrients are absorbed through the intestine wall into the blood. Waste passes to the large intestine, where water is removed, and is eliminated as faeces." },
      { heading: "Mechanical and chemical digestion", body: "Mechanical digestion physically breaks food into smaller pieces — chewing in the mouth and churning in the stomach. Chemical digestion uses enzymes and acids to break large molecules into smaller ones. Amylase in saliva breaks starch into sugars. Acid and protease in the stomach break down proteins. In the small intestine, enzymes break down all food types into molecules small enough to absorb — glucose from carbohydrates, amino acids from proteins, and fatty acids from fats." },
      { heading: "Absorption and waste", body: "The inner wall of the small intestine is covered in millions of villi, which create a huge surface area for absorption. Each villus has a thin wall and a good blood supply to carry nutrients away quickly. Water, minerals, and vitamins are also absorbed. What remains — mostly fibre and undigested material — enters the large intestine. Water is absorbed here, and bacteria help break down some remaining material before waste is stored in the rectum and expelled." },
    ],
    examTips: [
      "List the organs in order: mouth → oesophagus → stomach → small intestine → large intestine → rectum.",
      "Distinguish mechanical digestion (teeth, churning) from chemical digestion (enzymes, acid).",
      "Explain why the small intestine has villi — to increase surface area for faster absorption.",
    ],
    higherConcepts: [
      { term: "Peristalsis", definition: "Wave-like muscle contractions that push food along the digestive tract, even when the body is upside down." },
      { term: "Bile", definition: "A green alkaline liquid made by the liver and stored in the gall bladder. It neutralises stomach acid and emulsifies fats into smaller droplets for digestion." },
      { term: "Pancreas", definition: "An organ that produces digestive enzymes released into the small intestine and also produces insulin to control blood sugar." },
      { term: "Saliva", definition: "Liquid in the mouth containing amylase enzyme and mucus. It moistens food for swallowing and begins starch digestion." },
      { term: "Nutrient", definition: "A substance in food that the body needs for energy, growth, or repair — including carbohydrates, proteins, fats, vitamins, and minerals." },
    ],
    higherSections: [
      { heading: "Enzymes in digestion", body: "Each enzyme is specialised for one type of food molecule. Amylase converts starch to maltose (a sugar). Protease breaks proteins into amino acids. Lipase breaks fats into fatty acids and glycerol. Enzymes work best at body temperature (around 37°C) and are denatured (destroyed) by very high temperatures, which is why fever can affect digestion. The stomach's hydrochloric acid kills bacteria and provides the acidic conditions protease needs." },
      { heading: "The role of bacteria in the gut", body: "The large intestine contains billions of beneficial bacteria that help break down fibre, produce vitamins (including vitamin K), and compete with harmful bacteria. A healthy gut microbiome supports digestion and immunity. Antibiotics can kill beneficial bacteria alongside harmful ones, which is why doctors prescribe them carefully. Probiotic foods such as yoghurt contain live bacteria that may support gut health." },
    ],
    higherExamTips: [
      "Name the enzyme, where it is produced, and what it digests — e.g. amylase in saliva breaks down starch.",
      "Explain the role of bile in fat digestion: neutralises acid and emulsifies fats into smaller droplets.",
      "Describe how villi are adapted for absorption: large surface area, thin walls, rich blood supply.",
    ],
  }),

  createCurriculumContent({
    slug: "circulatory-system",
    overview:
      "The circulatory system transports blood around the body, delivering oxygen and nutrients to cells and removing waste products. KS2 pupils learn about the heart, blood vessels, and the components of blood. This topic is taught in upper KS2 (Years 5–6) and connects to exercise, health, and the effects of diet and lifestyle on the body.",
    keyConcepts: [
      { term: "Heart", definition: "A muscular organ that pumps blood around the body. It has four chambers and beats about 70–100 times per minute at rest, pumping roughly 7,000 litres of blood daily." },
      { term: "Artery", definition: "A blood vessel carrying blood away from the heart. Arteries have thick, muscular walls to withstand high pressure. They usually carry oxygenated blood (except the pulmonary artery)." },
      { term: "Vein", definition: "A blood vessel returning blood to the heart. Veins have thinner walls and valves to prevent backflow. They usually carry deoxygenated blood (except the pulmonary vein)." },
      { term: "Capillary", definition: "Tiny blood vessels with walls one cell thick, connecting arteries to veins. Exchange of oxygen, nutrients, and waste occurs through capillary walls." },
      { term: "Red blood cell", definition: "A cell containing haemoglobin, which binds to oxygen in the lungs and releases it in body tissues. Red blood cells have no nucleus, leaving more room for haemoglobin." },
      { term: "Plasma", definition: "The pale yellow liquid part of blood that carries dissolved nutrients, hormones, carbon dioxide, and waste products. It makes up about 55% of blood volume." },
      { term: "Pulse", definition: "The rhythmic throbbing felt in arteries each time the heart beats and pushes blood through them. Pulse rate increases during exercise." },
      { term: "Circulation", definition: "The continuous movement of blood through the heart, lungs, and body. Blood travels from heart → lungs (picks up oxygen) → heart → body (delivers oxygen) → back to heart." },
    ],
    sections: [
      { heading: "The heart and how it pumps", body: "The heart is about the size of a fist and sits slightly left of centre in the chest. It has four chambers: two atria (top) that receive blood, and two ventricles (bottom) that pump blood out. The right side pumps deoxygenated blood to the lungs. The left side pumps oxygenated blood to the rest of the body. Valves between chambers prevent blood flowing backwards. Each heartbeat has two sounds: 'lub-dub' as valves close." },
      { heading: "Blood vessels and their roles", body: "Arteries branch into smaller arterioles, then into capillaries where exchange happens. Capillaries join to form venules, then veins return blood to the heart. The aorta is the largest artery, carrying oxygenated blood from the left ventricle. The vena cava is the largest vein, returning deoxygenated blood to the right atrium. The pulmonary artery and vein connect the heart to the lungs." },
      { heading: "What's in blood", body: "Blood is made of plasma, red blood cells, white blood cells, and platelets. Red blood cells carry oxygen using haemoglobin, which turns bright red when oxygenated. White blood cells fight infection by engulfing pathogens or producing antibodies. Platelets are cell fragments that help blood clot at wounds. Plasma transports everything dissolved in it, including glucose, hormones, and carbon dioxide as waste." },
    ],
    examTips: [
      "Know the path of blood: body → right side of heart → lungs → left side of heart → body.",
      "Match each blood component to its function: red cells carry oxygen, white cells fight infection, platelets clot blood.",
      "Explain why capillaries are suited to exchange: thin walls, narrow diameter, large network.",
    ],
    higherConcepts: [
      { term: "Haemoglobin", definition: "The iron-containing protein in red blood cells that binds oxygen in the lungs and releases it in tissues. It gives blood its red colour." },
      { term: "Double circulation", definition: "The system where blood passes through the heart twice per complete circuit — once to the lungs (pulmonary) and once to the body (systemic)." },
      { term: "White blood cell", definition: "Cells of the immune system that destroy pathogens by engulfing them, producing antibodies, or releasing chemicals that kill invaders." },
      { term: "Platelet", definition: "Tiny cell fragments in blood that gather at wounds and trigger clotting to stop bleeding and prevent infection." },
      { term: "Resting heart rate", definition: "The number of heartbeats per minute when the body is at rest, typically 60–100 bpm for children. Exercise, stress, and illness affect heart rate." },
    ],
    higherSections: [
      { heading: "Exercise and the circulatory system", body: "During exercise, muscles need more oxygen and glucose for respiration, and produce more carbon dioxide. The heart beats faster and harder to deliver oxygenated blood more quickly. Breathing rate also increases to supply more oxygen and remove carbon dioxide. Regular aerobic exercise strengthens the heart muscle, making it more efficient. After exercise, heart rate gradually returns to resting level — fitter people recover faster." },
      { heading: "Keeping the circulatory system healthy", body: "A healthy diet low in saturated fat and salt helps prevent arteries becoming clogged. Smoking damages blood vessel walls and reduces oxygen-carrying capacity. Regular exercise keeps the heart strong. Some people are born with heart conditions, and modern medicine can treat many of these with surgery or medication. Understanding risk factors helps pupils make informed lifestyle choices." },
    ],
    higherExamTips: [
      "Explain why heart rate increases during exercise: muscles need more oxygen and glucose; more carbon dioxide must be removed.",
      "Describe the difference between arteries and veins in terms of wall thickness, pressure, and direction of blood flow.",
      "Interpret a graph showing heart rate before, during, and after exercise, explaining the pattern.",
    ],
  }),

  createCurriculumContent({
    slug: "plant-structure",
    overview:
      "Plants have specialised structures that allow them to make food, absorb water, and reproduce. KS2 pupils learn the functions of roots, stems, leaves, and flowers, and how photosynthesis and water transport keep plants alive. Understanding plant structure explains how plants are adapted to their environment and why they are essential to life on Earth.",
    keyConcepts: [
      { term: "Root", definition: "The part of a plant that anchors it in the soil and absorbs water and mineral ions. Some roots also store food, such as in carrots and potatoes." },
      { term: "Stem", definition: "The structure that supports the plant and transports water and nutrients between roots and leaves. It also may store food." },
      { term: "Leaf", definition: "The main site of photosynthesis. Leaves are broad and thin with a network of veins to maximise light absorption and transport." },
      { term: "Photosynthesis", definition: "The process by which green plants use light energy, carbon dioxide, and water to make glucose (food) and release oxygen. It occurs mainly in chloroplasts in leaves." },
      { term: "Chlorophyll", definition: "The green pigment in chloroplasts that absorbs light energy for photosynthesis. It is what makes leaves appear green." },
      { term: "Stomata", definition: "Tiny pores on the underside of leaves that open and close to let carbon dioxide in and oxygen and water vapour out." },
      { term: "Xylem", definition: "Tubes in the stem that transport water and mineral ions from the roots up to the leaves." },
      { term: "Transpiration", definition: "The loss of water vapour from leaves through stomata. It creates a pull that draws water up through the xylem from the roots." },
    ],
    sections: [
      { heading: "Parts of a plant and their functions", body: "Roots anchor the plant and absorb water and minerals from the soil through root hair cells, which increase surface area. The stem supports leaves and flowers and contains transport tubes. Leaves are the food factories where photosynthesis occurs. Flowers are the reproductive structures. Each part is adapted: root hairs are long and thin for absorption; leaves are broad for catching light; stems are rigid for support." },
      { heading: "Photosynthesis", body: "Plants need light, water, and carbon dioxide to photosynthesise. Chlorophyll in the chloroplasts captures light energy. This energy converts carbon dioxide and water into glucose (a sugar used for energy, growth, and storage as starch) and oxygen, which is released into the air. The word equation is: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll). Without photosynthesis, there would be no oxygen for animals to breathe and no food chains." },
      { heading: "Water transport in plants", body: "Water is absorbed by root hair cells and travels up through xylem vessels to the leaves. Transpiration — water evaporating from stomata — creates a continuous pull (transpiration stream) drawing water from roots to leaves. On hot, dry, windy days, transpiration increases and plants may wilt if they cannot absorb water fast enough. Stomata close in drought conditions to reduce water loss." },
    ],
    examTips: [
      "State the word equation for photosynthesis and name what the plant needs and what it produces.",
      "Link each plant part to its function — roots absorb, leaves photosynthesise, stems transport and support.",
      "Explain why root hair cells are adapted: large surface area for absorbing water and minerals.",
    ],
    higherConcepts: [
      { term: "Root hair cell", definition: "A specialised cell on the surface of roots with a long extension that increases surface area for absorbing water and mineral ions from soil." },
      { term: "Glucose", definition: "A simple sugar produced during photosynthesis. Plants use it for energy, to make cellulose for cell walls, and convert it to starch for storage." },
      { term: "Phloem", definition: "Tubes that transport dissolved sugars (made in leaves) to all parts of the plant that need them for energy or growth." },
      { term: "Chloroplast", definition: "An organelle in plant cells containing chlorophyll where photosynthesis takes place." },
      { term: "Wilting", definition: "When a plant droops because it is losing water faster than it can absorb it, usually due to high transpiration in hot conditions." },
    ],
    higherSections: [
      { heading: "Factors affecting photosynthesis and transpiration", body: "Photosynthesis rate is affected by light intensity, carbon dioxide concentration, and temperature. More light generally increases the rate until another factor becomes limiting. Transpiration is fastest in bright, warm, windy, dry conditions because more water evaporates from stomata. Pupils can investigate these factors using pondweed (for photosynthesis — counting oxygen bubbles) or by measuring water uptake in cut stems." },
      { heading: "Plant adaptations to different environments", body: "Desert plants such as cacti have thick stems for water storage, spines instead of leaves to reduce transpiration, and shallow widespread roots to catch rain. Aquatic plants have air spaces in leaves for buoyancy and flexible stems. Plants in shady woodland have large, thin leaves to capture limited light. These structural adaptations show how form follows function in biology." },
    ],
    higherExamTips: [
      "Explain what limits photosynthesis if light intensity keeps increasing but the rate levels off — usually CO₂ or temperature.",
      "Describe the full path of water from soil to atmosphere: root hair → xylem → leaf → stomata → transpiration.",
      "Compare adaptations of a desert plant and a pond plant, linking each feature to its function.",
    ],
  }),

  createCurriculumContent({
    slug: "plant-reproduction",
    overview:
      "Flowering plants reproduce through pollination and fertilisation, producing seeds that grow into new plants. Pupils learn the parts of a flower, how insects and wind help pollination, methods of seed dispersal, and the stages of a plant's life cycle. This topic connects to ecosystems, as plants depend on pollinators for reproduction.",
    keyConcepts: [
      { term: "Flower", definition: "The reproductive structure of flowering plants, containing male parts (stamens) that produce pollen and female parts (carpel) that contain ovules." },
      { term: "Pollen", definition: "Fine grains produced by the anther (top of the stamen) containing the male sex cells. Pollen must reach the stigma for fertilisation to occur." },
      { term: "Pollination", definition: "The transfer of pollen from the anther of one flower to the stigma of another (cross-pollination) or the same flower (self-pollination)." },
      { term: "Fertilisation", definition: "When a male sex cell in pollen joins with a female sex cell (ovule) inside the ovary, forming a seed. This is different from pollination." },
      { term: "Seed", definition: "A structure containing a plant embryo and a food store, protected by a seed coat. Seeds grow into new plants when conditions are right." },
      { term: "Seed dispersal", definition: "The spreading of seeds away from the parent plant to reduce competition for light, water, and nutrients. Methods include wind, water, animals, and explosion." },
      { term: "Germination", definition: "The process by which a seed begins to grow into a new plant when it has water, warmth, and oxygen. The embryo emerges as a seedling." },
      { term: "Life cycle", definition: "The stages a plant goes through from seed to mature plant to producing new seeds — germination, growth, flowering, pollination, fertilisation, seed dispersal." },
    ],
    sections: [
      { heading: "Parts of a flower", body: "Flowers contain both male and female parts. The stamen has an anther (makes pollen) and filament (stalk). The carpel has a stigma (sticky top that catches pollen), style (tube), and ovary (contains ovules with female sex cells). Petals attract pollinators with colour and scent. Sepals protect the flower bud. When pollen lands on the stigma, a pollen tube grows down the style to the ovary, where fertilisation occurs and seeds develop." },
      { heading: "Pollination by insects and wind", body: "Insect-pollinated flowers have bright petals, scent, and nectar to attract bees and butterflies. Pollen sticks to the insect's body and is carried to another flower. Wind-pollinated flowers (e.g. grasses) have small, dull petals, hang in catkins, and produce large amounts of light pollen. They do not need to attract insects. Both methods achieve the same goal: transferring pollen to a stigma." },
      { heading: "Seed dispersal and germination", body: "Seeds are dispersed by wind (sycamore keys, dandelion parachutes), animals (burrs stick to fur; berries are eaten and seeds pass out in droppings), water (coconuts float), and explosion (gorse pods pop open). Germination needs water (to activate enzymes), warmth, and oxygen. The seed absorbs water, the seed coat splits, and a root grows down while a shoot grows up towards light." },
    ],
    examTips: [
      "Distinguish pollination (pollen transfer) from fertilisation (sex cells joining) — they are separate steps.",
      "Label flower parts: stamen (anther + filament), carpel (stigma + style + ovary), petals, sepals.",
      "Give examples of seed dispersal methods and link each to a specific plant adaptation.",
    ],
    higherConcepts: [
      { term: "Cross-pollination", definition: "Pollen transferred from one plant to the stigma of a flower on a different plant of the same species, increasing genetic variation." },
      { term: "Embryo", definition: "The tiny developing plant inside a seed, complete with a miniature root (radicle) and shoot (plumule)." },
      { term: "Fruit", definition: "The ripened ovary of a flower that protects seeds and often aids dispersal. Apples, peas, and tomatoes are fruits, not vegetables." },
      { term: "Pollinator", definition: "An animal that transfers pollen between flowers, including bees, butterflies, moths, birds, and bats. Many are essential for food crops." },
      { term: "Monocotyledon and dicotyledon", definition: "Flowering plants with one seed leaf (monocot, e.g. grasses) or two seed leaves (dicot, e.g. beans) when they germinate." },
    ],
    higherSections: [
      { heading: "Investigating germination", body: "Fair tests can investigate what seeds need to germinate by setting up seeds with and without water, warmth, or oxygen. Seeds in a fridge (cold) or without water do not germinate. Seeds in oil (no oxygen) also fail. This demonstrates that all three conditions are needed. Pupils should measure germination rate (percentage of seeds that sprout) and record growth over time." },
      { heading: "The importance of pollinators", body: "About one third of food crops depend on animal pollinators. Declining bee populations threaten food production. Pupils can support pollinators by planting wildflowers, avoiding pesticides, and building bug hotels. Understanding the link between plant reproduction and food security makes this topic relevant beyond the classroom." },
    ],
    higherExamTips: [
      "Compare insect-pollinated and wind-pollinated flowers in a table: petal size, pollen amount, nectar, scent.",
      "Describe the sequence from pollination to seed: pollen on stigma → pollen tube → fertilisation → seed in fruit.",
      "Design a fair test to investigate one factor affecting germination, naming variables clearly.",
    ],
  }),

  createCurriculumContent({
    slug: "types-of-rocks",
    overview:
      "Rocks are grouped into three main types based on how they form: igneous, sedimentary, and metamorphic. KS2 pupils compare their appearance and properties, and learn that rocks are made of minerals. This topic introduces the rock cycle and connects to fossils, soils, and the history of Earth.",
    keyConcepts: [
      { term: "Igneous rock", definition: "Rock formed when molten magma or lava cools and solidifies. Examples include granite (slow cooling underground) and basalt (fast cooling at the surface)." },
      { term: "Sedimentary rock", definition: "Rock formed from layers of sediment (sand, mud, shells) compressed and cemented together over millions of years. Examples include sandstone, limestone, and shale." },
      { term: "Metamorphic rock", definition: "Rock formed when existing rock is changed by extreme heat and pressure deep underground, without melting. Examples include marble (from limestone) and slate (from shale)." },
      { term: "Magma", definition: "Molten rock beneath the Earth's surface. When it reaches the surface through a volcano, it is called lava." },
      { term: "Sediment", definition: "Small particles of rock, sand, mud, and organic material that settle in layers at the bottom of seas, lakes, and rivers." },
      { term: "Grain size", definition: "A property used to describe rocks. Igneous rocks that cool slowly have large crystals; fast-cooling rocks have small crystals. Sedimentary rocks often show visible layers or grains." },
      { term: "Permeability", definition: "Whether water can pass through a rock. Chalk and sandstone are permeable; granite and slate are impermeable." },
      { term: "Rock cycle", definition: "The continuous process by which rocks change from one type to another over geological time through weathering, erosion, heat, and pressure." },
    ],
    sections: [
      { heading: "Igneous rocks", body: "Igneous rocks form from cooled magma or lava. If magma cools slowly deep underground, large crystals form, creating rocks like granite with visible speckles. If lava cools quickly on the surface, small crystals or glassy rock form, such as basalt. Obsidian cools so fast it has no crystals at all. Igneous rocks are usually hard and interlocking." },
      { heading: "Sedimentary rocks", body: "Over millions of years, sediment settles in layers on sea and lake beds. Weight from above compresses lower layers, and minerals cement particles together, forming rock. Sandstone forms from compressed sand; limestone from shells and marine organisms; shale from compacted mud. Sedimentary rocks often have visible layers (strata) and may contain fossils." },
      { heading: "Metamorphic rocks", body: "When sedimentary or igneous rocks are buried deep underground, heat and pressure change them without melting. Limestone becomes marble — harder and crystalline. Shale becomes slate — flat layers that can be split into thin sheets. Metamorphic rocks often show bands or foliation caused by minerals aligning under pressure." },
    ],
    examTips: [
      "Match rock type to formation: igneous = cooled magma/lava, sedimentary = compressed layers, metamorphic = heat and pressure.",
      "Give a named example of each rock type: granite (igneous), sandstone (sedimentary), marble (metamorphic).",
      "Describe how crystal size relates to cooling rate in igneous rocks — slow = large crystals, fast = small crystals.",
    ],
    higherConcepts: [
      { term: "Weathering", definition: "The breaking down of rocks at the Earth's surface by physical forces (freeze-thaw, wind) or chemical action (acid rain), forming sediment." },
      { term: "Erosion", definition: "The movement of weathered rock particles by water, wind, ice, or gravity to new locations where they may form sedimentary rock." },
      { term: "Strata", definition: "Layers of sedimentary rock, with the oldest layers usually at the bottom and younger layers on top (law of superposition)." },
      { term: "Fossil", definition: "The preserved remains or traces of ancient organisms found in sedimentary rock, providing evidence of life millions of years ago." },
      { term: "Hardness", definition: "How resistant a rock is to scratching. Mohs scale ranks minerals from 1 (talc, soft) to 10 (diamond, hardest)." },
    ],
    higherSections: [
      { heading: "The rock cycle explained", body: "Rocks are constantly recycled over geological time. Igneous rocks weather and erode into sediment, which forms sedimentary rock. Sedimentary rock buried deep underground becomes metamorphic rock under heat and pressure. If metamorphic rock melts, it forms magma that cools into new igneous rock. This cycle has operated for billions of years, reshaping Earth's surface." },
      { heading: "Comparing rock properties", body: "Pupils should test rocks for hardness (can it be scratched?), permeability (does water soak in?), and acid reaction (limestone fizzes with dilute acid). These properties determine how rocks are used: granite for buildings, slate for roofs, limestone for cement. Understanding properties links geology to everyday materials." },
    ],
    higherExamTips: [
      "Draw or describe the rock cycle, showing how each rock type can become another.",
      "Explain why fossils are found in sedimentary but not igneous rock — sediment preserves remains; heat of magma destroys them.",
      "Use the law of superposition: in undisturbed strata, the deepest layer is the oldest.",
    ],
  }),

  createCurriculumContent({
    slug: "fossils-soil",
    overview:
      "Fossils are the preserved evidence of organisms that lived millions of years ago, found mainly in sedimentary rock. Soil forms from weathered rock mixed with organic matter and supports plant life. KS2 pupils learn how fossils form, what they tell us about the past, and how soils differ in composition and properties.",
    keyConcepts: [
      { term: "Fossil", definition: "The preserved remains, impression, or trace of a plant or animal from the distant past, usually found in sedimentary rock." },
      { term: "Fossilisation", definition: "The rare process by which remains are preserved. Soft parts decay, but hard parts like bones and shells may be replaced by minerals over millions of years." },
      { term: "Palaeontologist", definition: "A scientist who studies fossils to learn about ancient life, extinct species, and how environments have changed over time." },
      { term: "Soil", definition: "The top layer of the Earth's surface made of mineral particles, organic matter (humus), water, air, and living organisms such as worms and bacteria." },
      { term: "Humus", definition: "Dark, crumbly organic matter in soil formed from decayed plants and animals. It helps soil retain water and provides nutrients for plants." },
      { term: "Soil layers (horizons)", definition: "Soil has distinct layers: topsoil (dark, rich in humus), subsoil (less organic matter), and bedrock (parent rock)." },
      { term: "Permeable soil", definition: "Soil that allows water to drain through it easily, such as sandy soil. Important for preventing waterlogging." },
      { term: "Impermeable soil", definition: "Soil that does not let water pass through easily, such as clay soil, which can hold water and become sticky when wet." },
    ],
    sections: [
      { heading: "How fossils form", body: "When an organism dies, its soft parts usually decay quickly. If buried by sediment before decay completes, hard parts like shells and bones may be preserved. Minerals in groundwater gradually replace the original material, turning bone to stone while keeping its shape. Sometimes only an impression (mould) is left. Fossils can also be footprints, burrows, or preserved tree resin (amber). Fossilisation is rare — most organisms leave no trace." },
      { heading: "What fossils tell us", body: "Fossils show that species have changed over time and that many organisms that once lived are now extinct, such as dinosaurs. Fossils of sea creatures found on mountains tell us those rocks were once underwater. Fossils help date rock layers — older fossils are in deeper layers. Mary Anning, a famous British fossil hunter, discovered important marine reptile fossils in Lyme Regis." },
      { heading: "Soil composition and types", body: "Soil forms over thousands of years as rock is weathered and mixed with dead organic matter. Sandy soil has large particles and drains well but holds few nutrients. Clay soil has tiny particles, holds water and nutrients but drains poorly. Loam is a balanced mix ideal for growing plants. Worms and other organisms break down dead material, aerate soil, and improve its structure." },
    ],
    examTips: [
      "Describe fossil formation step by step: death → burial by sediment → minerals replace remains → rock forms around fossil.",
      "Explain why fossils are evidence for evolution and extinction — species in the past were different from today.",
      "Compare sandy and clay soil: particle size, drainage, and suitability for plant growth.",
    ],
    higherConcepts: [
      { term: "Extinction", definition: "When every member of a species dies out. Fossils show many extinct species, including dinosaurs and trilobites." },
      { term: "Amber", definition: "Fossilised tree resin that can preserve insects and small organisms in remarkable detail." },
      { term: "Parent rock", definition: "The bedrock beneath soil from which mineral particles in the soil were formed by weathering." },
      { term: "Decomposer", definition: "Organisms such as bacteria, fungi, and worms that break down dead material in soil, recycling nutrients." },
      { term: "Sedimentation", definition: "The process of sediment settling in layers in water, which eventually compresses into sedimentary rock containing fossils." },
    ],
    higherSections: [
      { heading: "Fossils and the history of life", body: "The fossil record is incomplete because fossilisation is rare and many rocks have been destroyed. However, it shows a clear progression: oldest rocks contain simple organisms; younger rocks show more complex life. Transitional fossils, such as Archaeopteryx (part dinosaur, part bird), show links between groups. Fossils of the same species on different continents support the theory that continents were once joined." },
      { heading: "Soil health and agriculture", body: "Healthy soil needs a balance of minerals, organic matter, water, and air spaces. Farmers add compost or manure to improve fertility. Crop rotation prevents nutrient depletion. Erosion by wind and water removes topsoil — planting trees and cover crops protects it. Understanding soil science helps explain food production and environmental conservation." },
    ],
    higherExamTips: [
      "Explain why the fossil record is incomplete — soft bodies decay, not everything is buried, rocks erode.",
      "Interpret a soil profile diagram, naming horizons and explaining how each layer forms.",
      "Link Mary Anning's discoveries to how fossils changed scientific understanding of Earth's history.",
    ],
  }),

  createCurriculumContent({
    slug: "light-shadows",
    overview:
      "Light is a form of energy that travels in straight lines from sources such as the Sun, lamps, and flames. KS2 pupils learn how light enables us to see objects, how shadows form when light is blocked, and how light reflects off surfaces. This topic introduces fundamental ideas about light behaviour used throughout physics.",
    keyConcepts: [
      { term: "Light source", definition: "An object that produces its own light, such as the Sun, a torch, a candle flame, or a light bulb. The Moon is not a light source — it reflects sunlight." },
      { term: "Reflection", definition: "When light bounces off a surface. Smooth, shiny surfaces like mirrors reflect light in a regular way; rough surfaces scatter light in many directions." },
      { term: "Shadow", definition: "A dark area formed when an opaque object blocks light. Shadows have the same shape as the object but may be larger or smaller depending on the light source distance." },
      { term: "Opaque", definition: "A material that does not let any light through, so it casts a dark shadow. Examples include wood, metal, and brick." },
      { term: "Transparent", definition: "A material that lets nearly all light pass through so you can see clearly through it, such as clear glass or clean water." },
      { term: "Translucent", definition: "A material that lets some light through but scatters it, so you cannot see clearly through it. Examples include frosted glass and tissue paper." },
      { term: "Straight-line travel", definition: "Light travels in straight lines from a source until it hits an object. This is why shadows have sharp edges from a small point source." },
      { term: "Beam of light", definition: "A column of light that can be seen when it reflects off dust or smoke particles in the air, such as torch beams in a dark room." },
    ],
    sections: [
      { heading: "How light travels and shadows form", body: "Light travels outwards from a source in straight lines. When it meets an opaque object, the object blocks the light and a shadow forms on the opposite side. The closer the object to the light source, the larger the shadow. The closer the object to the screen (wall), the smaller and sharper the shadow. A point source (small bulb) gives sharp shadows; a large source (fluorescent tube) gives softer shadows with fuzzy edges." },
      { heading: "Reflection of light", body: "When light hits a smooth, shiny surface like a mirror, it bounces off at the same angle it arrived — this is regular reflection. We see objects because light reflects off them into our eyes. White surfaces reflect most light; black surfaces absorb most light. Rough surfaces scatter reflected light in all directions, which is why we can see non-shiny objects from many angles." },
      { heading: "Materials and light", body: "Scientists classify materials by how they interact with light. Transparent materials (window glass) let light through clearly. Translucent materials (tracing paper) let some light through but blur images. Opaque materials (a book) block all light and cast shadows. These properties are useful when choosing materials — frosted glass for privacy, clear glass for windows." },
    ],
    examTips: [
      "Remember the Moon is not a light source — it reflects sunlight. Only objects that produce their own light are sources.",
      "Explain shadow size changes: object closer to light = bigger shadow; closer to screen = smaller shadow.",
      "Sort materials into transparent, translucent, and opaque with a clear example of each.",
    ],
    higherConcepts: [
      { term: "Incident ray", definition: "The path of light travelling towards a surface before it reflects." },
      { term: "Reflected ray", definition: "The path of light bouncing away from a surface after reflection." },
      { term: "Umbra and penumbra", definition: "The darkest part of a shadow (umbra) where all light is blocked, and the lighter fuzzy edge (penumbra) where only some light is blocked." },
      { term: "Absorption", definition: "When a material takes in light energy rather than reflecting or transmitting it. Dark surfaces absorb more light and get warmer." },
      { term: "Periscope", definition: "A device using two mirrors at 45° angles to let you see over walls or around corners, using reflection." },
    ],
    higherSections: [
      { heading: "Investigating shadows", body: "Pupils can conduct fair tests on shadows by changing the distance between a torch, object, and screen. Measure shadow height at different distances and plot results on a graph. A solar eclipse is a shadow — the Moon blocks sunlight from reaching parts of Earth. Understanding shadow geometry explains why eclipses are rare and only visible from certain locations." },
      { heading: "Light safety and the Sun", body: "Never look directly at the Sun — its intense light can permanently damage eyes. Sunglasses and hats reduce glare by blocking or absorbing some sunlight. UV light from the Sun causes sunburn and skin damage. Light pollution from street lamps and buildings affects nocturnal animals and our view of stars. Pupils should understand both the benefits and dangers of light." },
    ],
    higherExamTips: [
      "Draw a diagram showing light rays travelling in straight lines from a source, hitting an object, and forming a shadow.",
      "Explain why a shadow has a fuzzy edge when the light source is large — partial blocking creates penumbra.",
      "Describe how a periscope works using two reflections at mirror surfaces.",
    ],
  }),

  createCurriculumContent({
    slug: "light-vision",
    overview:
      "We see objects when light from a source reflects off them and enters our eyes. KS2 pupils learn the basic structure of the eye, how mirrors reflect light to form images, and why we see objects as certain colours. This topic builds on light and shadows to explain the sense of sight.",
    keyConcepts: [
      { term: "Eye", definition: "The organ of sight. Light enters through the cornea and pupil, is focused by the lens onto the retina, and signals travel via the optic nerve to the brain." },
      { term: "Pupil", definition: "The dark opening in the centre of the eye that lets light in. It gets smaller in bright light and larger in dim light to control how much light enters." },
      { term: "Lens", definition: "A transparent structure in the eye that focuses light onto the retina, creating a clear image. It can change shape to focus on near or far objects." },
      { term: "Retina", definition: "The light-sensitive layer at the back of the eye containing cells that detect light and send signals to the brain, which interprets them as images." },
      { term: "Plane mirror", definition: "A flat, smooth mirror that reflects light to form an image. The image appears the same size, upright, and the same distance behind the mirror as the object is in front." },
      { term: "Image", definition: "What we see in a mirror or through a lens. In a plane mirror, the image is virtual (cannot be projected on a screen) and laterally inverted (left and right swapped)." },
      { term: "Colour", definition: "Objects appear coloured because they reflect some wavelengths of light and absorb others. A red apple reflects red light and absorbs other colours." },
      { term: "White light", definition: "Light from the Sun and bulbs that contains all colours of the spectrum mixed together. A prism or raindrop can split it into a rainbow." },
    ],
    sections: [
      { heading: "How we see objects", body: "We see luminous objects (light sources) because light travels directly from them into our eyes. We see non-luminous objects (most things around us) because light from a source reflects off them into our eyes. Light travels from source to object to eye in straight lines. In a dark room with no light source, we cannot see objects because no light reflects into our eyes." },
      { heading: "Mirrors and reflection", body: "A plane mirror reflects light so that the angle of reflection equals the angle of incidence. The image in a flat mirror is the same size as the object, appears upright, and is laterally inverted — your right hand appears as the left hand in the mirror. Mirrors are used in everyday life: rear-view mirrors in cars, bathroom mirrors, and dental mirrors." },
      { heading: "Light and colour", body: "White light can be split into the spectrum of colours: red, orange, yellow, green, blue, indigo, violet (ROYGBIV). Objects appear a certain colour because they reflect that colour and absorb the rest. A white object reflects all colours; a black object absorbs all colours. Filters only let certain colours through — a red filter only transmits red light." },
    ],
    examTips: [
      "Describe the path of light to see an object: source → reflects off object → enters eye → brain interprets.",
      "State three properties of an image in a plane mirror: same size, upright, laterally inverted.",
      "Explain why a red object looks red in white light but dark/black in blue light — it reflects red only.",
    ],
    higherConcepts: [
      { term: "Optic nerve", definition: "The nerve that carries electrical signals from the retina to the brain, where they are processed into the images we perceive." },
      { term: "Lateral inversion", definition: "The left-right reversal of an image in a plane mirror — raising your right hand makes the mirror image appear to raise its left hand." },
      { term: "Spectrum", definition: "The range of colours produced when white light is split, from red (longest wavelength) to violet (shortest wavelength)." },
      { term: "Filter", definition: "A transparent material that absorbs some colours of light and transmits others, changing the colour of light passing through." },
      { term: "Cornea", definition: "The transparent front surface of the eye that protects the eye and helps focus incoming light." },
    ],
    higherSections: [
      { heading: "The eye and focusing", body: "The eye works like a camera. The cornea and lens bend (refract) light to focus a sharp image on the retina. Ciliary muscles change the lens shape for near and far vision. Short-sighted people see near objects clearly but distant objects are blurry; long-sighted people have the opposite problem. Glasses use lenses to correct these conditions by adjusting how light focuses." },
      { heading: "Colour mixing", body: "Primary colours of light are red, green, and blue. Mixing them in pairs gives secondary colours: red + green = yellow, red + blue = magenta, green + blue = cyan. All three together give white. This is additive colour mixing, used in TV and phone screens. It differs from paint mixing (subtractive), where mixing colours makes darker shades." },
    ],
    higherExamTips: [
      "Label the main parts of the eye: cornea, pupil, lens, retina, optic nerve — and state each function.",
      "Explain lateral inversion with a diagram showing an object and its mirror image.",
      "Predict the colour an object appears under coloured light — e.g. a blue object under red light looks black.",
    ],
  }),

  createCurriculumContent({
    slug: "forces",
    overview:
      "A force is a push or pull that can change the speed, direction, or shape of an object. KS2 pupils learn about contact and non-contact forces, friction, gravity, and how forces are measured. This topic is essential for understanding motion, machines, and everyday physical phenomena.",
    keyConcepts: [
      { term: "Force", definition: "A push or pull acting on an object. Forces are measured in newtons (N) using a force meter (newton meter). Forces can change speed, direction, or shape." },
      { term: "Contact force", definition: "A force that acts when two objects are touching, such as friction, air resistance, tension in a rope, or pushing a door." },
      { term: "Non-contact force", definition: "A force that acts at a distance without touching, including gravity, magnetism, and electrostatic force." },
      { term: "Gravity", definition: "The attractive force between any two masses. Earth's gravity pulls objects towards its centre, giving them weight. Without gravity, objects would float." },
      { term: "Weight", definition: "The force of gravity acting on an object's mass, measured in newtons. Weight = mass × gravitational field strength (about 10 N/kg on Earth)." },
      { term: "Friction", definition: "A force that opposes motion when two surfaces rub together. It acts in the opposite direction to movement and can produce heat." },
      { term: "Air resistance", definition: "A type of friction caused by air pushing against a moving object. It increases with speed and surface area, slowing falling objects." },
      { term: "Balanced forces", definition: "When forces on an object are equal and opposite, the object stays still or moves at constant speed. Unbalanced forces cause acceleration or deceleration." },
    ],
    sections: [
      { heading: "Types of forces", body: "Forces are everywhere. When you push a swing, you apply a contact force. Gravity (a non-contact force) pulls the swing back down. Friction between your shoes and the ground stops you slipping. Air resistance slows a parachute. Identifying forces in everyday situations helps pupils understand that forces have direction and size, and can be represented by arrows in diagrams." },
      { heading: "Gravity and weight", body: "Gravity is the force that keeps planets in orbit and pulls objects towards Earth. Mass is the amount of matter in an object (measured in kg) and does not change. Weight is the force of gravity on that mass (measured in N). On the Moon, gravity is weaker, so the same object weighs less but has the same mass. A 5 kg bag has a mass of 5 kg and weighs about 50 N on Earth." },
      { heading: "Friction and air resistance", body: "Friction is useful for walking, gripping, and braking — without it, we would slide everywhere. It is also a nuisance in machines, where it causes wear and wastes energy as heat. Lubricants (oil, grease) reduce friction. Air resistance affects falling objects: a feather falls slowly because of high air resistance; a stone falls faster. Parachutes increase air resistance to slow a safe landing." },
    ],
    examTips: [
      "Distinguish mass (kg, amount of matter) from weight (N, force of gravity) — they are not the same.",
      "Identify forces in diagrams using arrows: direction shows which way the force acts, length shows size.",
      "Explain how friction can be both useful (walking, braking) and a problem (worn tyres, overheating).",
    ],
    higherConcepts: [
      { term: "Newton", definition: "The unit of force. One newton is roughly the weight of a small apple. Force meters measure in newtons." },
      { term: "Gravitational field strength", definition: "The force of gravity per kilogram of mass. On Earth, g ≈ 10 N/kg; on the Moon, g ≈ 1.6 N/kg." },
      { term: "Drag", definition: "The total resistance force (friction + air resistance) acting against a moving object through a fluid (liquid or gas)." },
      { term: "Streamlining", definition: "Shaping an object to reduce air or water resistance, e.g. the curved body of a fish, an aeroplane, or a racing car." },
      { term: "Elastic deformation", definition: "When a force changes an object's shape and it returns to original when the force is removed, like stretching a spring." },
    ],
    higherSections: [
      { heading: "Balanced and unbalanced forces", body: "If a car travels at steady speed on a motorway, the engine's forward force is balanced by air resistance and friction — net force is zero. When the driver brakes, braking force is greater than forward force, so the car decelerates. Drawing force arrows on diagrams helps analyse situations: longer arrows mean bigger forces. When forces balance, there is no change in motion." },
      { heading: "Investigating friction", body: "Pupils can measure friction using a force meter to pull an object across different surfaces at steady speed. The reading equals the friction force. Sandpaper creates more friction than ice. Adding mass increases friction because the surfaces are pressed together more firmly. Results can be presented in tables and bar charts, comparing surfaces fairly." },
    ],
    higherExamTips: [
      "Calculate weight using weight = mass × 10 N/kg — e.g. 3 kg object weighs 30 N on Earth.",
      "Explain terminal velocity: as a falling object's speed increases, air resistance increases until it balances weight.",
      "Draw a force diagram for a floating boat: upthrust balances weight, so forces are balanced.",
    ],
  }),

  createCurriculumContent({
    slug: "magnets",
    overview:
      "Magnets produce a force that can attract or repel magnetic materials without touching them. KS2 pupils learn which materials are magnetic, about north and south poles, and how magnetic fields create patterns of force. This topic connects to non-contact forces and has practical applications in compasses, motors, and recycling.",
    keyConcepts: [
      { term: "Magnet", definition: "An object that produces a magnetic force, attracting magnetic materials and repelling or attracting other magnets depending on which poles face each other." },
      { term: "Magnetic material", definition: "A material attracted to a magnet, mainly iron, steel (which contains iron), nickel, and cobalt. Most metals (aluminium, copper, gold) are not magnetic." },
      { term: "North pole", definition: "One end of a magnet where field lines emerge. Like poles (N-N or S-S) repel; unlike poles (N-S) attract." },
      { term: "South pole", definition: "The opposite end of a magnet to the north pole. Every magnet has both poles — they cannot be separated." },
      { term: "Magnetic field", definition: "The invisible region around a magnet where magnetic force acts. It is strongest at the poles and weaker further away." },
      { term: "Compass", definition: "A device with a small free-spinning magnet (needle) that aligns with Earth's magnetic field, pointing approximately north." },
      { term: "Attraction", definition: "When unlike magnetic poles (north and south) pull towards each other." },
      { term: "Repulsion", definition: "When like magnetic poles (north-north or south-south) push away from each other." },
    ],
    sections: [
      { heading: "Magnetic materials and forces", body: "Only certain metals are magnetic. Iron and steel are strongly attracted to magnets. Nickel and cobalt are also magnetic but less common. Aluminium cans, copper coins, and gold jewellery are not attracted. Magnets do not need to touch to exert force — they can attract or repel through air, water, and some solid materials. This makes magnetism a non-contact force, like gravity." },
      { heading: "Poles and attraction/repulsion", body: "Every magnet has a north-seeking pole (N) and a south-seeking pole (S). If you break a magnet in half, each piece has its own N and S poles. When two magnets are brought close: N near S = attraction (they pull together); N near N or S near S = repulsion (they push apart). This is how maglev trains float above tracks." },
      { heading: "Magnetic fields and patterns", body: "Sprinkling iron filings around a bar magnet reveals curved lines from N to S pole, showing the magnetic field pattern. The field is strongest at the poles. Earth's core acts like a giant magnet, which is why compasses work. A freely suspended bar magnet will turn to align with Earth's field, with its north pole pointing towards Earth's geographic North Pole (which is actually a magnetic south pole)." },
    ],
    examTips: [
      "Know magnetic materials: iron, steel, nickel, cobalt. Copper, aluminium, and plastic are NOT magnetic.",
      "State the pole rule: like poles repel, unlike poles attract — use N and S in your answer.",
      "Explain why a compass needle points north — it aligns with Earth's magnetic field.",
    ],
    higherConcepts: [
      { term: "Electromagnet", definition: "A magnet created by passing electric current through a coil of wire around an iron core. It can be switched on and off and its strength varied." },
      { term: "Permanent magnet", definition: "A magnet that keeps its magnetism without an external power source, such as a fridge magnet or compass needle." },
      { term: "Earth's magnetic field", definition: "The magnetic field surrounding Earth, produced by movement of molten iron in the outer core. It protects Earth from solar radiation." },
      { term: "Induced magnetism", definition: "When a magnetic material is brought near a magnet, it becomes a temporary magnet with induced poles that attract." },
      { term: "Magnetic shielding", definition: "Using magnetic materials to block or redirect magnetic fields, used in some electronic devices and MRI rooms." },
    ],
    higherSections: [
      { heading: "Electromagnets and their uses", body: "When electric current flows through a wire coiled around an iron nail, the nail becomes a temporary magnet — an electromagnet. Increasing the number of coils or the current strengthens it. Electromagnets are used in scrapyard cranes (lift iron, drop non-iron), electric bells, relays, and MRI scanners. Unlike permanent magnets, they can be switched off, which is useful for picking up and releasing metal objects." },
      { heading: "Investigating magnetic strength", body: "Pupils can test how many paper clips a magnet holds through different materials (paper, cardboard, water) or at different distances. Results show the field weakens with distance and can pass through non-magnetic materials. Fair tests keep the same magnet and paper clip type, changing only one variable. Graphing results helps identify patterns." },
    ],
    higherExamTips: [
      "Compare permanent and electromagnets: permanent = always on; electromagnet = can switch on/off, strength adjustable.",
      "Explain induced magnetism: iron nail near magnet becomes temporary magnet with opposite pole closest to magnet.",
      "Suggest a use for electromagnets and explain why an electromagnet is better than a permanent magnet for that job.",
    ],
  }),

  createCurriculumContent({
    slug: "states",
    overview:
      "Matter exists in three states — solid, liquid, and gas — each with distinct properties. KS2 pupils learn to compare how particles are arranged and how this affects shape, volume, and flow. Understanding states of matter explains everyday phenomena from ice melting to steam rising from a kettle.",
    keyConcepts: [
      { term: "Solid", definition: "Matter with a fixed shape and fixed volume. Particles are tightly packed in a regular pattern and vibrate in place. Examples include ice, wood, and metal." },
      { term: "Liquid", definition: "Matter with a fixed volume but no fixed shape — it takes the shape of its container. Particles are close together but can slide past each other. Examples include water, oil, and milk." },
      { term: "Gas", definition: "Matter with no fixed shape or volume — it spreads to fill any container. Particles are far apart and move freely in all directions. Examples include air, steam, and oxygen." },
      { term: "Particle", definition: "Tiny pieces that all matter is made of. In KS2, pupils learn that differences in particle arrangement explain the properties of solids, liquids, and gases." },
      { term: "Fixed shape", definition: "A property of solids — they keep their shape unless a force changes them. Liquids and gases do not have a fixed shape." },
      { term: "Fixed volume", definition: "A property of solids and liquids — they keep the same amount of space. Gases expand or compress to fill their container." },
      { term: "Flow", definition: "The ability of liquids and gases to move and spread. Solids do not flow (unless they melt or are ground into powder)." },
      { term: "Compress", definition: "To squeeze into a smaller volume. Gases are easily compressed; liquids are slightly compressible; solids are very difficult to compress." },
    ],
    sections: [
      { heading: "Properties of solids, liquids, and gases", body: "Solids keep their shape and volume — a book stays the same whether on a shelf or a table. Liquids keep their volume but flow to fill the bottom of a container — pour 100 ml of water into different shaped glasses and the volume stays the same but the shape changes. Gases fill all available space — air spreads throughout a room. Gases can be compressed (pumped into a bicycle tyre); solids cannot." },
      { heading: "Particle model of matter", body: "Scientists explain states using a particle model. In solids, particles are tightly packed in a fixed arrangement, vibrating in place. In liquids, particles are close but can move past each other, allowing flow. In gases, particles are far apart and move rapidly in random directions, colliding with each other and container walls. Heating gives particles more energy and makes them move faster." },
      { heading: "Identifying states in everyday life", body: "Water is a useful example because it exists in all three states: ice (solid), liquid water, and water vapour (gas/steam). Carbon dioxide is a gas at room temperature but becomes solid dry ice when frozen. Mercury is a liquid metal at room temperature — unusual because most metals are solid. Observing and classifying materials builds scientific vocabulary." },
    ],
    examTips: [
      "Compare the three states in a table: fixed shape (solid yes, liquid no, gas no), fixed volume (solid yes, liquid yes, gas no).",
      "Use the particle model to explain why gases compress easily — particles are far apart with lots of empty space.",
      "Give examples of the same substance in different states — water as ice, liquid, and steam.",
    ],
    higherConcepts: [
      { term: "Density", definition: "How much mass is packed into a volume. Solids are usually densest, then liquids, then gases. Ice floats on water because it is less dense." },
      { term: "Vibration", definition: "The back-and-forth movement of particles in a solid. Heating increases vibration until particles break free (melting)." },
      { term: "Diffusion", definition: "The spreading of gas or liquid particles from high to low concentration until evenly mixed, e.g. perfume spreading through a room." },
      { term: "Viscosity", definition: "How thick or resistant to flow a liquid is. Honey is more viscous than water; treacle flows more slowly than milk." },
      { term: "Plasma", definition: "A fourth state of matter (extension) — ionised gas found in stars and lightning, where particles have so much energy electrons are stripped away." },
    ],
    higherSections: [
      { heading: "Heating and particle movement", body: "When a solid is heated, particles vibrate faster. At the melting point, vibrations are strong enough for particles to break free from their fixed positions and slide past each other — the solid becomes a liquid. Further heating makes particles move faster and further apart until they escape as a gas. Cooling reverses these changes. This links states of matter to changes of state." },
      { heading: "Investigating gases", body: "Although gases are invisible, their presence can be demonstrated. Carbon dioxide from vinegar and bicarbonate of soda extinguishes a candle because it is denser than air and does not support burning. Air has mass — an inflated balloon weighs more than a deflated one. Gases exert pressure on container walls from particle collisions, which is why a balloon expands when blown up." },
    ],
    higherExamTips: [
      "Explain diffusion using particles: gas particles move randomly and spread from high to low concentration.",
      "Describe what happens to particle arrangement when a solid melts — fixed positions break, particles slide past each other.",
      "Compare viscosity of two liquids and suggest why one flows more slowly — stronger forces between particles.",
    ],
  }),

  createCurriculumContent({
    slug: "changes-of-state",
    overview:
      "Materials can change between solid, liquid, and gas when heated or cooled. KS2 pupils learn the names of these changes — melting, freezing, evaporation, condensation — and that they are reversible. The water cycle demonstrates these changes happening continuously in nature.",
    keyConcepts: [
      { term: "Melting", definition: "The change from solid to liquid when heated. Ice melts to water at 0°C. The temperature stays constant during melting even though heat is still being added." },
      { term: "Freezing", definition: "The change from liquid to solid when cooled. Water freezes to ice at 0°C. This is the reverse of melting." },
      { term: "Evaporation", definition: "The change from liquid to gas at the surface of a liquid, happening below boiling point. Puddles dry, clothes dry on a line." },
      { term: "Condensation", definition: "The change from gas to liquid when cooled. Water vapour in warm air turns to droplets on a cold mirror or window." },
      { term: "Boiling", definition: "Rapid evaporation throughout a liquid at a specific temperature (100°C for water at sea level). Bubbles of gas form inside the liquid." },
      { term: "Reversible change", definition: "A change that can be undone, such as melting ice back to water by cooling, or freezing water back to ice." },
      { term: "Water cycle", definition: "The continuous movement of water through evaporation, condensation, precipitation, and collection, driven by the Sun's energy." },
      { term: "Temperature", definition: "A measure of how hot something is, in degrees Celsius (°C). Changes of state occur at specific temperatures for pure substances." },
    ],
    sections: [
      { heading: "Melting and freezing", body: "When ice is heated, it melts to liquid water at 0°C. The temperature of the ice-water mixture stays at 0°C until all ice has melted — the energy goes into breaking bonds between particles, not raising temperature. Freezing is the reverse: water cooled to 0°C turns to ice. Different substances melt and freeze at different temperatures — iron melts at about 1,538°C." },
      { heading: "Evaporation and condensation", body: "Evaporation happens at the surface of a liquid at any temperature — water molecules with enough energy escape as gas. Warmth, wind, and large surface area speed up evaporation. Condensation is the reverse: water vapour cools and turns back to liquid droplets. You see condensation on cold windows, bathroom mirrors, and the outside of a cold drink." },
      { heading: "The water cycle", body: "The Sun heats water in oceans, lakes, and rivers, causing evaporation. Water vapour rises, cools, and condenses to form clouds. When droplets combine and grow heavy, they fall as precipitation (rain, snow, hail). Water collects in rivers and flows back to the sea. This cycle has no beginning or end and recycles all Earth's water." },
    ],
    examTips: [
      "Name the six changes of state and their reverse: melting ↔ freezing, evaporation ↔ condensation, sublimation ↔ deposition.",
      "Explain evaporation vs boiling: evaporation at any temperature at the surface; boiling at 100°C throughout the liquid.",
      "Describe the water cycle using the four key terms: evaporation, condensation, precipitation, collection.",
    ],
    higherConcepts: [
      { term: "Sublimation", definition: "The change directly from solid to gas without becoming liquid, e.g. dry ice (solid CO₂) or iodine crystals." },
      { term: "Boiling point", definition: "The temperature at which a liquid boils. For pure water at sea level, this is 100°C. It decreases at higher altitude." },
      { term: "Melting point", definition: "The temperature at which a solid melts. For pure water ice, this is 0°C." },
      { term: "Precipitation", definition: "Water released from clouds as rain, snow, sleet, or hail when condensed droplets or ice crystals become too heavy." },
      { term: "Energy transfer", definition: "Heat energy must be absorbed for melting and evaporation, and released during freezing and condensation, even though temperature may not change." },
    ],
    higherSections: [
      { heading: "Temperature during changes of state", body: "A key concept for upper KS2 is that during melting or boiling, temperature stays constant even though heating continues. The energy breaks inter-particle bonds rather than increasing kinetic energy (temperature). A graph of temperature against time for heating ice shows flat sections at 0°C (melting) and 100°C (boiling). This is why a ice-water mixture stays at 0°C until all ice melts." },
      { heading: "Factors affecting evaporation rate", body: "Evaporation rate depends on temperature (warmer = faster), surface area (larger = faster), humidity (drier air = faster), and wind (moving air removes vapour, speeding evaporation). Pupils can investigate by placing wet cloths in different conditions and measuring drying time. Sweating cools the body because evaporation of sweat absorbs heat energy from the skin." },
    ],
    higherExamTips: [
      "Explain why temperature stays constant during boiling even though the Bunsen burner is still on — energy breaks bonds.",
      "Predict which puddle dries first and justify using evaporation factors: warmth, wind, surface area, humidity.",
      "Draw and label a water cycle diagram with arrows showing evaporation, condensation, precipitation, and collection.",
    ],
  }),

  createCurriculumContent({
    slug: "making-sound",
    overview:
      "Sound is produced when objects vibrate, creating waves that travel through materials to our ears. KS2 pupils learn how vibrations create sound, and how changing vibrations affects pitch (high/low) and volume (loud/quiet). This topic connects physics to music and everyday hearing.",
    keyConcepts: [
      { term: "Vibration", definition: "A rapid back-and-forth movement. All sounds are caused by vibrations — when vibrations stop, the sound stops." },
      { term: "Sound wave", definition: "A pattern of vibrations that travels through a material (solid, liquid, or gas) from the sound source to our ears." },
      { term: "Pitch", definition: "How high or low a sound is. Fast vibrations produce high-pitched sounds (whistle); slow vibrations produce low-pitched sounds (drum)." },
      { term: "Volume (loudness)", definition: "How loud or quiet a sound is. Bigger vibrations produce louder sounds; smaller vibrations produce quieter sounds." },
      { term: "Amplitude", definition: "The size of a vibration. Larger amplitude means louder sound. Shown as the height of a wave on an oscilloscope." },
      { term: "Frequency", definition: "How many vibrations occur per second, measured in hertz (Hz). Higher frequency = higher pitch." },
      { term: "Sound source", definition: "Any object that vibrates to produce sound — vocal cords, guitar strings, drum skins, tuning forks." },
      { term: "Oscilloscope", definition: "An instrument that displays sound waves visually, showing how pitch and volume relate to wave patterns." },
    ],
    sections: [
      { heading: "How sound is made", body: "When an object vibrates, it pushes and pulls on the air around it, creating sound waves. Pluck a guitar string and you can see and feel it vibrate. Tap a drum and the skin vibrates. Speak and your vocal cords vibrate. If you touch a ringing tuning fork to water, you see splashes proving it vibrates. Stop the vibrations (touch the string) and the sound stops immediately." },
      { heading: "Pitch — high and low sounds", body: "Pitch depends on how fast an object vibrates (frequency). Short, tight guitar strings vibrate faster and produce high notes. Long, loose strings vibrate slower and produce low notes. A mouse squeaks at high pitch; a lion roars at low pitch. Children can investigate pitch using elastic bands of different lengths stretched over a box, or water glasses filled to different levels." },
      { heading: "Volume — loud and quiet sounds", body: "Volume depends on the size (amplitude) of vibrations. Hit a drum harder and it vibrates with bigger movements, creating a louder sound. Whispering produces small vibrations in vocal cords; shouting produces large ones. Distance also affects volume — sounds get quieter further from the source because energy spreads out." },
    ],
    examTips: [
      "State clearly: all sounds are caused by vibrations. No vibration = no sound.",
      "Link pitch to speed of vibration: faster = higher pitch, slower = lower pitch.",
      "Link volume to size of vibration: bigger vibrations = louder sound.",
    ],
    higherConcepts: [
      { term: "Hertz (Hz)", definition: "The unit of frequency — one hertz means one vibration per second. Human hearing ranges from about 20 Hz to 20,000 Hz." },
      { term: "Resonance", definition: "When an object vibrates strongly because it matches the frequency of another vibrating object, e.g. a wine glass shattering from a matching musical note." },
      { term: "Ultrasound", definition: "Sound at frequencies above 20,000 Hz, too high for humans to hear. Used in medical scanning and by bats for navigation." },
      { term: "Infrasound", definition: "Sound below 20 Hz, too low for humans to hear. Elephants and whales use infrasound to communicate over long distances." },
      { term: "Damping", definition: "Reducing vibrations to reduce sound, e.g. foam inside a guitar case or rubber feet on a washing machine." },
    ],
    higherSections: [
      { heading: "Investigating pitch scientifically", body: "Fair tests can investigate what affects pitch: change string length, tension, or thickness one at a time. Measure pitch by comparing to a reference or counting vibrations per second. Shorter strings at higher tension vibrate faster and produce higher pitch. Thinner strings vibrate faster than thicker ones of the same length. Record results in tables and identify patterns." },
      { heading: "Sound and music", body: "Musical instruments control pitch and volume deliberately. Wind instruments change pitch by altering the length of the air column (covering holes on a recorder). Brass instruments use valves. Percussion instruments vary pitch by size — larger drums are lower. Volume in an orchestra is controlled by how hard instruments are played. Understanding the physics of sound enhances musical learning." },
    ],
    higherExamTips: [
      "Interpret oscilloscope traces: closer waves = higher pitch, taller waves = louder volume.",
      "Explain how to make a string instrument play a higher note: shorten string, increase tension, or use thinner string.",
      "Describe an investigation into pitch, naming independent and dependent variables.",
    ],
  }),

  createCurriculumContent({
    slug: "sound-travel",
    overview:
      "Sound travels as vibrations through solids, liquids, and gases, but not through a vacuum. KS2 pupils learn that sound travels at different speeds in different materials and how the ear detects sound waves. This topic explains why we hear some things and not others, and has important safety applications.",
    keyConcepts: [
      { term: "Medium", definition: "The material through which sound travels — a solid, liquid, or gas. Sound cannot travel through a vacuum (empty space) because there are no particles to vibrate." },
      { term: "Particle vibration", definition: "Sound travels when particles in a medium vibrate and pass the vibration to neighbouring particles, creating a chain of movement from source to ear." },
      { term: "Ear", definition: "The organ of hearing. Sound enters the ear canal, vibrates the eardrum, and tiny bones pass vibrations to the cochlea, which sends signals to the brain." },
      { term: "Eardrum", definition: "A thin membrane in the ear that vibrates when sound waves hit it, converting sound energy into mechanical vibrations." },
      { term: "Speed of sound", definition: "Sound travels fastest in solids (about 5,000 m/s in steel), slower in liquids (about 1,500 m/s in water), and slowest in gases (about 340 m/s in air)." },
      { term: "Volume decreases with distance", definition: "Sound gets quieter further from the source because vibration energy spreads out over a larger area and is absorbed by the medium." },
      { term: "Echo", definition: "A reflected sound wave that bounces off a hard surface and returns to the listener, heard as a repeat of the original sound." },
      { term: "Insulation", definition: "Materials that absorb sound vibrations, reducing the amount of sound that passes through, used in walls and headphones." },
    ],
    sections: [
      { heading: "How sound travels through materials", body: "Sound needs particles to travel. In air, sound makes air particles vibrate back and forth, passing the vibration along in a chain. In water, particles are closer so sound travels about four times faster than in air. In solids like a table, particles are tightly packed so sound travels even faster — you hear a ticking watch through wood before you hear it through air. Astronauts in space cannot hear each other without radios because space is a vacuum." },
      { heading: "The ear and hearing", body: "Sound waves enter the outer ear and travel down the ear canal to the eardrum, causing it to vibrate. Three tiny bones (ossicles) amplify these vibrations and pass them to the cochlea, a fluid-filled spiral containing hair cells that convert vibrations to electrical signals. The auditory nerve carries signals to the brain, which interprets them as sound. Loud sounds can damage hair cells permanently." },
      { heading: "Sound and distance", body: "Sound intensity decreases with distance because energy spreads over a larger area. Thunder is heard after lightning because light travels much faster than sound. By counting seconds between flash and thunder and dividing by three, you can estimate how many kilometres away the storm is. Soundproofing uses soft, porous materials to absorb vibrations before they reach the other side of a wall." },
    ],
    examTips: [
      "State that sound needs a medium (solid, liquid, or gas) and cannot travel through a vacuum.",
      "Order materials by sound speed: solids fastest, then liquids, then gases.",
      "Describe the path of sound to the brain: source → medium → ear → eardrum → cochlea → nerve → brain.",
    ],
    higherConcepts: [
      { term: "Cochlea", definition: "The spiral-shaped organ in the inner ear that converts sound vibrations into electrical nerve signals." },
      { term: "Auditory nerve", definition: "The nerve carrying sound signals from the cochlea to the brain for interpretation." },
      { term: "Decibel (dB)", definition: "The unit measuring sound level. Normal conversation is about 60 dB; sounds above 85 dB can damage hearing." },
      { term: "Sonar", definition: "A technology using reflected sound waves (echolocation) to detect objects underwater, used by dolphins, bats, and submarines." },
      { term: "Longitudinal wave", definition: "A wave where vibrations travel in the same direction as the wave, pushing particles together (compressions) and apart (rarefactions)." },
    ],
    higherSections: [
      { heading: "The bell jar experiment", body: "A classic demonstration: an electric bell rings inside a glass jar. As air is pumped out (creating a vacuum), the sound fades until it cannot be heard, though the bell is still visibly ringing. This proves sound needs particles to travel. When air is let back in, sound returns. Pupils should explain this using the particle model — no particles means no vibration transfer." },
      { heading: "Protecting hearing", body: "Prolonged exposure to sounds above 85 dB damages the cochlea's hair cells, causing permanent hearing loss. Ear defenders absorb sound energy before it reaches the eardrum. MP3 players at maximum volume can exceed safe levels. Pupils should know the 60/60 rule: listen at no more than 60% volume for no more than 60 minutes at a time. Workplace noise regulations protect construction and factory workers." },
    ],
    higherExamTips: [
      "Explain the bell jar experiment: as air is removed, fewer particles carry vibrations, so sound fades.",
      "Compare how bats and submarines use echolocation/sonar to navigate using reflected sound.",
      "Suggest ways to reduce noise pollution in a school or home, explaining how each method works.",
    ],
  }),

  createCurriculumContent({
    slug: "simple-circuits",
    overview:
      "An electric circuit is a complete loop through which electricity flows from a source to components and back. KS2 pupils learn to build series circuits, use circuit symbols, and understand how switches control the flow of electricity. This topic introduces fundamental ideas about electricity used throughout science and technology.",
    keyConcepts: [
      { term: "Circuit", definition: "A complete, unbroken path through which electric current can flow from the positive terminal of a cell, through components, and back to the negative terminal." },
      { term: "Cell", definition: "A single unit that provides electrical energy (voltage) to a circuit. Batteries contain multiple cells connected together." },
      { term: "Battery", definition: "Two or more cells connected together to provide more energy. The positive and negative terminals must connect correctly for current to flow." },
      { term: "Component", definition: "Any part of a circuit with a specific function, such as a bulb (produces light), buzzer (produces sound), motor (produces movement), or switch." },
      { term: "Series circuit", definition: "A circuit with only one path for current. If one component breaks or is removed, the entire circuit stops working." },
      { term: "Switch", definition: "A component that opens (breaks) or closes (completes) a circuit, controlling whether current flows. Open switch = off; closed switch = on." },
      { term: "Circuit symbol", definition: "A standard drawing used to represent components in circuit diagrams: lines for wires, specific symbols for cell, bulb, switch, motor, and buzzer." },
      { term: "Current", definition: "The flow of electric charge through a circuit. Current only flows when the circuit is complete — a gap stops the flow." },
    ],
    sections: [
      { heading: "Building simple circuits", body: "A basic circuit needs a cell (energy source), wires, and a component such as a bulb. Connect one wire from the positive terminal to the bulb, and another from the bulb back to the negative terminal. If the bulb lights, the circuit is complete. If it does not, check for loose connections, a dead cell, or a broken bulb. Adding a switch allows you to turn the circuit on and off without disconnecting wires." },
      { heading: "Series circuits", body: "In a series circuit, components are connected one after another in a single loop. Current flows through each component in turn. If one bulb is removed or breaks in a series circuit, the gap stops current flowing and all bulbs go out. This is why old Christmas tree lights used to all go dark when one bulb failed. More components in series can make bulbs dimmer because they share the cell's energy." },
      { heading: "Circuit diagrams and symbols", body: "Scientists use standard symbols so anyone can understand a circuit drawing. A cell is shown as long and short parallel lines; a bulb as a circle with a cross; a switch as a gap with a pivoting line; a motor as a circle with M. Wires are straight lines. Drawing accurate circuit diagrams is an important scientific skill tested in SATs." },
    ],
    examTips: [
      "Know standard circuit symbols: cell, battery, bulb, switch (open and closed), wire, motor, buzzer.",
      "Explain why removing one bulb in a series circuit makes all bulbs go out — the circuit is broken.",
      "Identify whether a circuit will work: it must be a complete loop with no gaps and a power source.",
    ],
    higherConcepts: [
      { term: "Voltage", definition: "The 'push' or energy provided by a cell, measured in volts (V). More cells in series provide more voltage." },
      { term: "Open circuit", definition: "A circuit with a break or gap where current cannot flow. An open switch creates an open circuit." },
      { term: "Closed circuit", definition: "A complete circuit with no gaps, allowing current to flow continuously." },
      { term: "Short circuit", definition: "When a wire bypasses components, allowing too much current to flow. This can overheat wires and is dangerous." },
      { term: "Brightness", definition: "Bulb brightness depends on current. More cells increase brightness; more bulbs in series decrease brightness as energy is shared." },
    ],
    higherSections: [
      { heading: "Investigating series circuits", body: "Pupils can investigate how the number of cells affects bulb brightness, or how adding more bulbs dims each one. Use identical bulbs and cells for fair tests. Measure brightness by eye or compare by photographing. Results show that voltage is shared among components in series. Predicting and testing circuit behaviour develops logical thinking about electricity." },
      { heading: "Electrical safety", body: "Mains electricity (230 V in UK homes) is far more dangerous than cells (1.5 V). Never experiment with mains electricity. Water conducts electricity, so keep electrical devices away from water. Damaged cables expose wires and risk shock. Fuses and circuit breakers cut off current if it becomes too high. Only qualified electricians should work on household wiring." },
    ],
    higherExamTips: [
      "Draw a circuit diagram from a description, or build a circuit from a diagram — practise both directions.",
      "Explain why adding a second cell makes a bulb brighter: more voltage provides more energy to the bulb.",
      "Identify a short circuit in a diagram and explain why it is dangerous — too much current flows, causing overheating.",
    ],
  }),

  createCurriculumContent({
    slug: "conductors-insulators",
    overview:
      "Electrical conductors allow electricity to flow through them; insulators do not. KS2 pupils learn to classify materials as conductors or insulators and understand why this distinction matters for electrical safety and circuit design. This topic connects material properties to practical applications.",
    keyConcepts: [
      { term: "Conductor", definition: "A material that allows electric current to flow through it easily. Most metals, including copper, iron, aluminium, and gold, are good conductors." },
      { term: "Insulator", definition: "A material that does not allow electric current to flow through it. Examples include plastic, rubber, glass, wood, and ceramic." },
      { term: "Metal", definition: "Most metals are good electrical conductors because of how their particles are arranged, allowing charge to move freely. Copper is used in wires." },
      { term: "Plastic coating", definition: "Insulating plastic wrapped around metal wires to prevent electric shock and stop current escaping from the circuit." },
      { term: "Testing materials", definition: "Using a simple circuit with a gap to test whether a material completes the circuit. If the bulb lights, the material is a conductor." },
      { term: "Electrical safety", definition: "Using insulators to protect people from electric shock — plastic cases on plugs, rubber gloves for electricians, and insulated wire coatings." },
      { term: "Copper", definition: "The metal most commonly used in electrical wiring because it is an excellent conductor, flexible, and relatively inexpensive." },
      { term: "Graphite", definition: "A form of carbon that conducts electricity despite being a non-metal. Used in pencil leads and some electrical applications." },
    ],
    sections: [
      { heading: "Conductors and how to test them", body: "To test if a material conducts electricity, build a circuit with a gap (two crocodile clips). Place the material in the gap. If the bulb lights, it is a conductor; if not, it is an insulator. Metals consistently conduct. Water with dissolved salts conducts (tap water); pure distilled water is a poor conductor. The human body conducts because it contains water and salts — this is why electricity is dangerous to touch." },
      { heading: "Insulators and safety", body: "Insulators protect us from electric shock. Plug casings are plastic; wire coatings are rubber or PVC; electricians wear rubber gloves. Wooden handles on tools provide insulation. Air is also an insulator — birds can sit on power lines without shock because they are not connected to the ground. Understanding conductors and insulators is essential for electrical safety." },
      { heading: "Choosing materials for purpose", body: "Circuit wires use copper (conductor) coated in plastic (insulator). Plugs have metal pins (conductor) in a plastic body (insulator). Light bulb filaments use tungsten (conductor that glows when hot). Switches use metal contacts separated by insulating material. Engineers choose materials based on whether they need current to flow or to be blocked." },
    ],
    examTips: [
      "Sort common materials into conductors (metals) and insulators (plastic, rubber, wood, glass).",
      "Describe the test for conductivity using a circuit with a gap and a bulb.",
      "Explain why electrical wires are coated in plastic — copper conducts inside, plastic insulates outside for safety.",
    ],
    higherConcepts: [
      { term: "Semiconductor", definition: "A material that conducts under certain conditions, used in electronics. Silicon is the most common semiconductor (extension concept)." },
      { term: "Static electricity", definition: "A build-up of electric charge on an insulator's surface, caused by friction. It discharges with a spark when charge moves." },
      { term: "Earth wire", definition: "A safety wire in mains plugs that conducts fault current to the ground, preventing electric shock from metal-cased appliances." },
      { term: "Resistor", definition: "A component that reduces current flow in a circuit. The filament in a bulb acts as a resistor, getting hot and glowing." },
      { term: "Thermal conductor", definition: "A material that transfers heat well (e.g. metal saucepan base). Different from electrical conductor but often correlated in metals." },
    ],
    higherSections: [
      { heading: "Conductors in everyday technology", body: "Conductors are essential in all electrical technology. Circuit boards use copper tracks. Mobile phone chargers have copper wires. Aluminium is used in overhead power cables because it is light and conducts well. Gold is used in phone connectors because it does not corrode. Understanding why specific metals are chosen links material science to engineering decisions." },
      { heading: "Static electricity and insulators", body: "When you rub a balloon on hair, electrons transfer to the balloon (insulator), creating static charge. The balloon can then attract paper. Lightning is a massive static discharge between clouds and ground. Static electricity is a hazard in fuel stations — sparks can ignite petrol vapour. Anti-static wrist straps prevent static damage to sensitive electronics during manufacture." },
    ],
    higherExamTips: [
      "Explain why a metal object in a circuit makes the bulb light but a plastic one does not — free movement of charge in metals.",
      "Describe safety features of a UK plug: plastic case (insulator), metal pins (conductor), fuse, earth wire.",
      "Predict whether an unknown material conducts based on its properties — metals conduct; most non-metals insulate.",
    ],
  }),

  createCurriculumContent({
    slug: "solar-system",
    overview:
      "The Solar System consists of the Sun, eight planets, moons, and smaller objects orbiting our star. KS2 pupils learn about the planets, the Sun's importance for life, and the Moon's phases. This topic develops spatial awareness of our place in the universe and is taught in upper KS2.",
    keyConcepts: [
      { term: "Solar System", definition: "The Sun and all objects orbiting it: eight planets, dwarf planets, moons, asteroids, and comets, held in place by the Sun's gravity." },
      { term: "Sun", definition: "The star at the centre of our Solar System. It is a massive ball of hot gas that produces light and heat through nuclear reactions, essential for life on Earth." },
      { term: "Planet", definition: "A large spherical object orbiting a star. The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune." },
      { term: "Orbit", definition: "The curved path an object follows as it travels around another object due to gravity. Planets orbit the Sun; moons orbit planets." },
      { term: "Moon", definition: "A natural satellite that orbits a planet. Earth has one moon; Jupiter has over 90. The Moon reflects sunlight — it does not produce its own light." },
      { term: "Inner planets", definition: "The four planets closest to the Sun: Mercury, Venus, Earth, and Mars. They are rocky and relatively small." },
      { term: "Outer planets", definition: "The four planets furthest from the Sun: Jupiter, Saturn, Uranus, and Neptune. They are gas giants (or ice giants), much larger than inner planets." },
      { term: "Phase of the Moon", definition: "The changing shape of the Moon as seen from Earth, caused by how much of the sunlit side faces us. The cycle takes about 29.5 days." },
    ],
    sections: [
      { heading: "The Sun and planets", body: "The Sun contains 99.8% of the Solar System's mass. Its gravity holds all planets in orbit. Inner rocky planets (Mercury, Venus, Earth, Mars) are small with solid surfaces. Outer gas giants (Jupiter, Saturn) are enormous balls of hydrogen and helium. Uranus and Neptune are ice giants. A mnemonic helps remember order: My Very Educated Mother Just Served Us Nachos. Pluto was reclassified as a dwarf planet in 2006." },
      { heading: "The Moon and its phases", body: "Earth's Moon takes about 27.3 days to orbit Earth and about 29.5 days to complete a phase cycle. We see different amounts of the sunlit side: new moon (dark), waxing crescent, first quarter (half), waxing gibbous, full moon, then waning gibbous, last quarter, waning crescent. The Moon's gravity causes tides on Earth. The same side of the Moon always faces Earth because its rotation matches its orbit." },
      { heading: "The Sun and life on Earth", body: "The Sun provides light for photosynthesis, heat to maintain Earth's temperature, and energy that drives weather and the water cycle. Without the Sun, Earth would be frozen and lifeless. However, the Sun's UV radiation can damage skin, so protection is important. The Sun is a medium-sized star about 4.6 billion years old with about 5 billion years of fuel remaining." },
    ],
    examTips: [
      "List the eight planets in order from the Sun — use the mnemonic My Very Educated Mother Just Served Us Nachos.",
      "Explain that the Moon has phases because we see different amounts of its sunlit side as it orbits Earth.",
      "State that the Sun is a star (produces own light) and the Moon is not (reflects sunlight).",
    ],
    higherConcepts: [
      { term: "Gravity", definition: "The force that keeps planets in orbit around the Sun and moons around planets. Stronger gravity from larger masses." },
      { term: "Dwarf planet", definition: "A spherical body orbiting the Sun that has not cleared its orbit of other objects. Pluto is the most famous example." },
      { term: "Asteroid", definition: "A rocky object orbiting the Sun, mostly found in the asteroid belt between Mars and Jupiter." },
      { term: "Comet", definition: "An icy body that develops a glowing tail when its orbit brings it close to the Sun, heating the ice into gas and dust." },
      { term: "Light year", definition: "The distance light travels in one year (about 9.5 trillion km). Used to measure distances between stars, not time." },
    ],
    higherSections: [
      { heading: "Comparing planets", body: "Planets vary enormously. Jupiter's Great Red Spot is a storm larger than Earth. Venus has a thick atmosphere causing a greenhouse effect with surface temperatures of 460°C. Mars has the largest volcano in the Solar System (Olympus Mons). Saturn's rings are made of ice and rock particles. Pupils should compare size, distance from Sun, composition, and notable features using tables and models." },
      { heading: "Space exploration", body: "Humans have sent probes to every planet. The International Space Station orbits Earth. The Apollo missions landed 12 astronauts on the Moon. Rovers explore Mars, sending data about its geology and past water. Future missions aim to return humans to the Moon and eventually reach Mars. Space exploration advances scientific knowledge and technology." },
    ],
    higherExamTips: [
      "Compare inner and outer planets: rocky vs gas/ice giants, size, number of moons, ring systems.",
      "Explain why we always see the same side of the Moon — its rotation period equals its orbital period (tidally locked).",
      "Describe evidence that Mars once had liquid water — dry riverbeds, minerals that form in water, polar ice caps.",
    ],
  }),

  createCurriculumContent({
    slug: "earth-movement",
    overview:
      "Earth moves in two ways: rotating on its axis (causing day and night) and orbiting the Sun (causing years and seasons). KS2 pupils learn how these movements explain daily and seasonal patterns. This topic connects astronomy to observable phenomena in everyday life.",
    keyConcepts: [
      { term: "Rotation", definition: "Earth spinning on its axis once every 24 hours. Rotation causes day and night as different parts face the Sun." },
      { term: "Revolution (orbit)", definition: "Earth travelling around the Sun once every 365.25 days (one year). Earth's orbit is slightly elliptical, not a perfect circle." },
      { term: "Axis", definition: "An imaginary line through Earth from North Pole to South Pole, tilted at about 23.5° from vertical. Earth rotates around this tilted axis." },
      { term: "Day and night", definition: "Caused by Earth's rotation. The side facing the Sun experiences daylight; the side facing away experiences night. Each cycle takes 24 hours." },
      { term: "Seasons", definition: "Spring, summer, autumn, and winter, caused by Earth's tilted axis as it orbits the Sun. Different hemispheres receive more or less direct sunlight at different times of year." },
      { term: "Equator", definition: "An imaginary line around Earth's middle, equidistant from both poles. Countries on the equator receive the most direct sunlight year-round." },
      { term: "Hemisphere", definition: "Half of Earth — Northern Hemisphere (above equator) or Southern Hemisphere (below). Seasons are opposite in each hemisphere." },
      { term: "Leap year", definition: "A year with 366 days (29 February added) every four years, because Earth's orbit takes 365.25 days, not exactly 365." },
    ],
    sections: [
      { heading: "Day and night", body: "Earth rotates once every 24 hours. As it spins, the side facing the Sun has daytime and the opposite side has night. The Sun appears to move across the sky, but it is Earth that is turning. At noon, the Sun is highest in the sky. At midnight, your location faces away from the Sun. Different countries experience day and night at different times because of rotation." },
      { heading: "The year and Earth's orbit", body: "While rotating, Earth also orbits the Sun, completing one full circuit in 365.25 days. This is a year. The orbit is elliptical — Earth is slightly closer to the Sun in January (Northern Hemisphere winter), proving seasons are not caused by distance from the Sun but by the tilt of Earth's axis." },
      { heading: "Seasons and Earth's tilt", body: "Earth's axis is tilted at 23.5°. When the Northern Hemisphere tilts towards the Sun (June), it receives more direct sunlight and has summer; the Southern Hemisphere has winter. Six months later, the situation reverses. At the equinoxes (March and September), both hemispheres receive equal daylight. Near the poles, tilt causes very long days in summer and very long nights in winter." },
    ],
    examTips: [
      "Distinguish rotation (day/night, 24 hours) from revolution (year, 365 days) — do not confuse them.",
      "Explain seasons using Earth's tilted axis, not distance from the Sun.",
      "State that when it is summer in the UK (Northern Hemisphere), it is winter in Australia (Southern Hemisphere).",
    ],
    higherConcepts: [
      { term: "Solstice", definition: "The longest day (summer solstice, ~21 June) or shortest day (winter solstice, ~21 December) in the Northern Hemisphere." },
      { term: "Equinox", definition: "When day and night are approximately equal length worldwide (~21 March and ~21 September). The Sun is directly above the equator." },
      { term: "Tropic of Cancer and Capricorn", definition: "Imaginary lines at 23.5°N and 23.5°S marking the furthest points where the Sun can be directly overhead." },
      { term: "Time zone", definition: "Regions using the same standard time. Earth is divided into 24 time zones because it rotates 360° in 24 hours (15° per hour)." },
      { term: "Midnight sun", definition: "When the Sun remains visible at midnight, occurring in summer inside the Arctic and Antarctic Circles due to Earth's tilt." },
    ],
    higherSections: [
      { heading: "Modelling Earth, Sun, and Moon", body: "Pupils can use globes, torches, and balls to model day/night and seasons. A torch (Sun) shining on a rotating globe shows day on the lit side and night on the dark side. Tilting the globe while orbiting the torch demonstrates seasons. These models help correct misconceptions — many children think seasons are caused by Earth moving closer to or further from the Sun." },
      { heading: "Shadows and the Sun's apparent movement", body: "The Sun appears to move from east to west because Earth rotates west to east. Shadows are shortest at solar noon when the Sun is highest, and longest at sunrise and sunset. Shadow direction and length change through the day and through the seasons. Sundials use this principle. Ancient civilisations tracked the Sun's position to create calendars." },
    ],
    higherExamTips: [
      "Correct the misconception: seasons are caused by axial tilt, not changing distance from the Sun.",
      "Explain why countries near the equator have little seasonal temperature variation — consistent direct sunlight.",
      "Use a diagram to show Earth's position at summer and winter solstice for the Northern Hemisphere.",
    ],
  }),

  createCurriculumContent({
    slug: "inheritance",
    overview:
      "Inheritance is the passing of characteristics from parents to offspring. KS2 pupils learn that offspring resemble but are not identical to their parents, and that some traits are inherited while others are influenced by the environment. This topic introduces genetics and variation, taught in upper KS2 (Year 6).",
    keyConcepts: [
      { term: "Inheritance", definition: "The passing of characteristics (traits) from parents to their offspring through genetic information carried in cells." },
      { term: "Offspring", definition: "The young of an organism — children, puppies, seedlings. Offspring inherit traits from both parents." },
      { term: "Characteristic (trait)", definition: "A feature of a living thing, such as eye colour, height, leaf shape, or fur colour. Traits can be inherited or affected by the environment." },
      { term: "Variation", definition: "Differences between individuals of the same species. No two humans are identical (except identical twins). Variation is essential for evolution." },
      { term: "Inherited characteristic", definition: "A trait passed from parents to offspring through genes, such as eye colour, blood group, or natural hair colour." },
      { term: "Environmental characteristic", definition: "A trait influenced by surroundings or lifestyle, such as scars, language spoken, or muscle development from exercise." },
      { term: "Gene", definition: "A unit of genetic information that controls a specific characteristic. Genes are passed from parents to offspring." },
      { term: "Identical twins", definition: "Twins that develop from one fertilised egg splitting in two, so they share exactly the same genes and look very similar." },
    ],
    sections: [
      { heading: "How characteristics are inherited", body: "Children inherit characteristics from both parents. You might have your mother's eye colour and your father's hair type. Offspring are similar to parents but not identical — brothers and sisters share parents but look different from each other. Plants inherit too — a sunflower seed grows into a sunflower, not a rose, because it inherits sunflower genes." },
      { heading: "Inherited vs environmental traits", body: "Some characteristics are purely inherited: natural eye colour, blood group, and height potential. Others are environmental: a scar from an injury, suntanned skin, or learned skills like reading. Some traits are both — height is inherited but also affected by nutrition. Distinguishing inherited from environmental traits is a key scientific skill." },
      { heading: "Variation within species", body: "All humans belong to one species but show enormous variation in appearance, personality, and ability. Dogs show variation through selective breeding — there are hundreds of breeds of different sizes and shapes, all Canis familiaris. Variation within a species is normal and important — it means some individuals may be better suited to survive if conditions change." },
    ],
    examTips: [
      "Give examples of inherited traits (eye colour, height) and environmental traits (scars, suntan, learned skills).",
      "Explain that offspring are similar but not identical to parents — they inherit from both parents.",
      "Know that identical twins have the same inherited characteristics because they share the same genes.",
    ],
    higherConcepts: [
      { term: "DNA", definition: "A molecule in cells that carries genetic information in a code. Genes are sections of DNA that control specific traits." },
      { term: "Chromosome", definition: "A long thread of DNA found in the nucleus of a cell. Humans have 46 chromosomes (23 pairs) in most cells." },
      { term: "Dominant trait", definition: "A characteristic that appears even if only one parent passes the gene for it, e.g. brown eyes over blue eyes." },
      { term: "Recessive trait", definition: "A characteristic that only appears if both parents pass the gene for it, e.g. blue eyes when both parents carry the recessive gene." },
      { term: "Selective breeding", definition: "Choosing parents with desired traits to produce offspring with those traits, used in farming and pet breeding for thousands of years." },
    ],
    higherSections: [
      { heading: "Selective breeding in agriculture", body: "Farmers have selectively bred plants and animals for desired traits for thousands of years. Wheat has been bred for higher yield and disease resistance. Cows produce more milk; chickens lay more eggs. Dogs are bred for specific purposes — retrievers for fetching, greyhounds for speed. Selective breeding uses inheritance deliberately but only works within a species — you cannot breed a cat with a dog." },
      { heading: "Genetics in medicine", body: "Understanding inheritance helps diagnose genetic conditions such as cystic fibrosis and sickle cell anaemia, which are passed through families. Some conditions are caused by a single gene; most traits involve many genes. Genetic counselling helps families understand risks. This is an extension topic but shows why inheritance science matters in real life." },
    ],
    higherExamTips: [
      "Explain selective breeding with an example: choose parents with desired trait → offspring inherit trait → repeat over generations.",
      "Distinguish continuous variation (height, weight — range of values) from discontinuous variation (blood group — distinct categories).",
      "Suggest which traits in a family photo are inherited and which are environmental, giving reasons.",
    ],
  }),

  createCurriculumContent({
    slug: "evolution",
    overview:
      "Evolution explains how species change gradually over long periods of time through natural selection. KS2 pupils learn that fossils provide evidence for life in the past, that organisms are adapted to their environments, and that species that cannot adapt may become extinct. This is a Year 6 topic in the UK National Curriculum.",
    keyConcepts: [
      { term: "Evolution", definition: "The gradual change in species over many generations. Living things today have developed from simpler ancestors over billions of years." },
      { term: "Natural selection", definition: "The process where organisms with helpful adaptations are more likely to survive, reproduce, and pass those adaptations to offspring." },
      { term: "Adaptation", definition: "A feature that helps an organism survive and reproduce in its environment. Adaptations develop over many generations through natural selection." },
      { term: "Survival of the fittest", definition: "Organisms best suited to their environment are most likely to survive and reproduce. 'Fittest' means best adapted, not necessarily strongest." },
      { term: "Fossil evidence", definition: "Fossils show that species have changed over time and that many organisms from the past are now extinct, supporting the theory of evolution." },
      { term: "Extinction", definition: "When all members of a species die out. Dinosaurs became extinct about 66 million years ago, possibly due to an asteroid impact and climate change." },
      { term: "Speciation", definition: "The formation of a new species when a group becomes so different from the original population that they can no longer reproduce together." },
      { term: "Charles Darwin", definition: "The British naturalist who proposed the theory of evolution by natural selection, published in 'On the Origin of Species' (1859)." },
    ],
    sections: [
      { heading: "Evidence from fossils", body: "Fossils provide a record of life on Earth over billions of years. Older fossils in deeper rock layers show simpler organisms; younger fossils show more complex life. Fossils of transitional species, such as Archaeopteryx (part dinosaur, part bird), show links between groups. Fossils of marine creatures on mountaintops show that those areas were once underwater. The fossil record is incomplete but clearly shows change over time." },
      { heading: "Natural selection explained", body: "Within any species, there is variation. Some individuals have traits that help them survive better. For example, in a population of moths, darker moths may be better camouflaged on polluted tree bark and survive bird predation more often. They reproduce and pass dark colouration to offspring. Over many generations, the population changes. This is natural selection — nature 'selects' the best-adapted individuals." },
      { heading: "Adaptation and extinction", body: "Organisms are adapted to their environment through evolution. Polar bears have thick fur for cold climates. If the environment changes faster than a species can adapt, extinction may result. Dinosaurs dominated Earth for 165 million years but could not survive the rapid environmental changes 66 million years ago. Today, human activities cause habitat loss and climate change, threatening many species with extinction." },
    ],
    examTips: [
      "Explain natural selection in steps: variation → some better adapted → survive and reproduce → trait becomes more common.",
      "Use fossil evidence to support evolution: older fossils are simpler, species have changed, some are extinct.",
      "Name Charles Darwin and state that he proposed evolution by natural selection.",
    ],
    higherConcepts: [
      { term: "Peppered moth", definition: "A classic example of natural selection: dark moths increased during the Industrial Revolution as soot darkened tree bark, then declined when pollution was reduced." },
      { term: "Fossil record", definition: "The total collection of fossils, showing the history of life. Gaps exist because fossilisation is rare and many species left no fossils." },
      { term: "Generation time", definition: "The time between one generation and the next. Species with short generation times (bacteria, insects) evolve faster than those with long ones (elephants, humans)." },
      { term: "Biodiversity", definition: "The variety of life on Earth — all the different species and ecosystems. Evolution has created enormous biodiversity over billions of years." },
      { term: "Human evolution", definition: "Humans share a common ancestor with other primates. Fossil evidence shows gradual changes over millions of years from ape-like ancestors to modern Homo sapiens." },
    ],
    higherSections: [
      { heading: "The peppered moth case study", body: "Before the Industrial Revolution, most peppered moths were pale, camouflaged on lichen-covered trees. As soot darkened bark, dark moths survived better (camouflaged) and became more common. After clean air laws, lichen returned, pale moths became advantageous again. This is direct evidence of natural selection happening within a human lifetime and is widely taught in UK schools." },
      { heading: "Evolution and conservation", body: "Understanding evolution helps conservation. Small populations lose genetic variation, making them less able to adapt to change. Habitat fragmentation prevents species from migrating as climate shifts. Invasive species outcompete native species that have not evolved defences. Conservation protects biodiversity by preserving habitats, maintaining genetic diversity, and reintroducing species to suitable environments." },
    ],
    higherExamTips: [
      "Describe the peppered moth example step by step, linking environmental change to natural selection.",
      "Explain why antibiotic resistance in bacteria is an example of rapid evolution — short generation time, strong selection pressure.",
      "Evaluate fossil evidence: what it shows (change over time, extinction) and its limitations (incomplete record).",
    ],
  }),

  createCurriculumContent({
    slug: "material-properties",
    overview:
      "Different materials have different properties that make them suitable for specific uses. KS2 pupils learn to describe and compare properties such as hardness, flexibility, transparency, and conductivity, and to choose appropriate materials for a purpose. This topic connects science to design, engineering, and everyday decision-making.",
    keyConcepts: [
      { term: "Property", definition: "A characteristic of a material that can be observed or measured, such as hardness, strength, flexibility, or transparency." },
      { term: "Hardness", definition: "How resistant a material is to being scratched or dented. Diamond is the hardest natural material; talc is very soft." },
      { term: "Strength", definition: "How well a material withstands force without breaking. Steel is strong; biscuit is not." },
      { term: "Flexibility", definition: "How easily a material bends without breaking. Rubber is flexible; glass is rigid and brittle." },
      { term: "Transparency", definition: "How much light passes through a material. Glass is transparent; wood is opaque; frosted glass is translucent." },
      { term: "Electrical conductivity", definition: "Whether a material allows electricity to pass through. Metals conduct; plastics and rubber insulate." },
      { term: "Thermal conductivity", definition: "How well a material transfers heat. Metal saucepans conduct heat well; wood and plastic are poor conductors (good insulators)." },
      { term: "Permeability", definition: "Whether a material allows liquids or gases to pass through. Sponges and fabric are permeable; plastic bags are impermeable." },
    ],
    sections: [
      { heading: "Describing material properties", body: "Scientists describe materials using specific vocabulary. Hard materials resist scratching (granite). Flexible materials bend without breaking (rubber bands). Transparent materials let light through clearly (window glass). Magnetic materials are attracted to magnets (iron). Waterproof materials do not let water through (oilskin). Pupils should test and compare properties rather than guess from appearance." },
      { heading: "Choosing materials for purpose", body: "Materials are chosen because their properties suit the job. Saucepan handles are plastic or wood (poor heat conductors) while the base is metal (good heat conductor). Cycling helmets are rigid plastic (absorbs impact). Umbrellas use waterproof fabric. Electrical cables use copper (conducts) coated in plastic (insulates). Understanding properties helps explain why objects are made the way they are." },
      { heading: "Comparing and grouping materials", body: "Materials can be grouped by shared properties: all metals conduct electricity and heat; all plastics are flexible and waterproof. Natural materials (wood, cotton, wool, leather) come from living things or the Earth. Synthetic materials (nylon, polyester, acrylic) are manufactured. Comparing materials in tables helps identify which is best for a particular use." },
    ],
    examTips: [
      "Match material properties to uses: metal saucepan base (thermal conductor), plastic handle (insulator).",
      "Use precise vocabulary: hard, flexible, transparent, waterproof, magnetic — not vague words like 'nice' or 'good'.",
      "Suggest the best material for a given purpose and explain why, citing at least two relevant properties.",
    ],
    higherConcepts: [
      { term: "Absorbency", definition: "How well a material soaks up liquids. Kitchen paper is absorbent; plastic is not. Important for towels, nappies, and sponges." },
      { term: "Density", definition: "How much mass is packed into a volume. Dense materials (lead, gold) feel heavy for their size; less dense materials (cork, polystyrene) float." },
      { term: "Brittleness", definition: "A material that breaks or shatters when struck or bent, such as glass or dry biscuit. Opposite of flexibility." },
      { term: "Corrosion resistance", definition: "How well a material resists rusting or chemical damage. Stainless steel and aluminium resist corrosion; iron rusts easily." },
      { term: "Biodegradability", definition: "Whether a material can be broken down naturally by micro-organisms. Wood and paper biodegrade; plastic persists for hundreds of years." },
    ],
    higherSections: [
      { heading: "Testing material properties fairly", body: "Pupils should design fair tests to compare materials: test hardness by scratching with a nail, flexibility by bending, absorbency by timing water uptake, and strength by adding weights until breaking. Keep all variables the same except the material being tested. Record results in tables and rank materials. Real testing is more reliable than guessing from appearance." },
      { heading: "Sustainability and material choice", body: "Modern material choices consider environmental impact. Single-use plastics pollute oceans and persist for centuries. Recycled materials reduce waste. Bamboo grows quickly and is renewable. Stainless steel is durable and recyclable. Pupils should evaluate materials not just on physical properties but on sustainability — a property increasingly important in design and engineering." },
    ],
    higherExamTips: [
      "Design a fair test to compare absorbency of three fabrics, naming variables and controls.",
      "Evaluate a product (e.g. water bottle) by listing material properties that make it suitable and one improvement.",
      "Compare natural and synthetic materials: origin, properties, biodegradability, and environmental impact.",
    ],
  }),

  createCurriculumContent({
    slug: "changes-materials",
    overview:
      "Materials can undergo changes that are either reversible or irreversible. KS2 pupils learn about dissolving, and how to distinguish changes where the original material can be recovered from changes that create new substances. This topic builds scientific thinking about evidence and permanence of change.",
    keyConcepts: [
      { term: "Reversible change", definition: "A change that can be undone to recover the original material, such as melting ice, freezing water, dissolving salt in water (and evaporating the water to recover salt), or stretching an elastic band." },
      { term: "Irreversible change", definition: "A change that cannot easily be undone because a new substance has formed, such as burning wood, cooking an egg, or rusting iron." },
      { term: "Dissolving", definition: "When a solid mixes completely with a liquid to form a solution, with particles spreading evenly throughout. The solid appears to disappear but is still present." },
      { term: "Solution", definition: "A mixture formed when a substance (solute) dissolves in a liquid (solvent). Salt water is a solution of salt in water." },
      { term: "Soluble", definition: "A substance that dissolves in a liquid. Salt and sugar are soluble in water; sand is insoluble." },
      { term: "Insoluble", definition: "A substance that does not dissolve in a liquid. Sand, chalk, and oil are insoluble in water." },
      { term: "Burning (combustion)", definition: "An irreversible change where a substance reacts with oxygen, producing heat, light, and new substances such as ash and carbon dioxide." },
      { term: "Rusting", definition: "An irreversible change when iron reacts with oxygen and water to form brown iron oxide (rust). Weakens the metal over time." },
    ],
    sections: [
      { heading: "Reversible changes", body: "Reversible changes can be undone. Ice melts to water and can be refrozen. Salt dissolves in water, but evaporating the water leaves salt behind. Stretching an elastic band is reversible — it returns to its original shape. Dissolving is reversible because the solute can be recovered by evaporation. These changes do not create new substances — the original material is still there, just in a different form or state." },
      { heading: "Irreversible changes", body: "Irreversible changes create new substances that cannot easily be turned back. Burning wood produces ash, smoke, and gases — you cannot unburn wood. Cooking an egg turns clear egg white to solid white — irreversible. Rusting changes iron to iron oxide. Baking a cake mixes ingredients into a new substance. These changes involve chemical reactions, not just physical changes of state." },
      { heading: "Dissolving and solutions", body: "When salt dissolves in water, salt particles spread between water particles — the salt is still there, which you can taste. Stirring and warming speed up dissolving. Not all solids dissolve — sand sinks to the bottom unchanged. Not all liquids dissolve in water — oil forms a separate layer. The amount of solute that can dissolve is limited — excess sinks to the bottom as undissolved solid." },
    ],
    examTips: [
      "Classify changes as reversible or irreversible: melting ice (reversible), burning paper (irreversible).",
      "Explain dissolving: the solid breaks into tiny particles that spread through the liquid — it does not disappear.",
      "Know examples of soluble (salt, sugar) and insoluble (sand, chalk) substances in water.",
    ],
    higherConcepts: [
      { term: "Solute", definition: "The substance that dissolves in a solvent to form a solution. Salt is the solute in salt water." },
      { term: "Solvent", definition: "The liquid that does the dissolving. Water is the most common solvent — called the 'universal solvent'." },
      { term: "Chemical reaction", definition: "A process where substances react to form new substances with different properties. Burning, rusting, and cooking involve chemical reactions." },
      { term: "Physical change", definition: "A change in form or state without creating a new substance, such as melting, freezing, dissolving, or bending." },
      { term: "Precipitate", definition: "A solid that forms when two solutions are mixed and a chemical reaction produces an insoluble substance." },
    ],
    higherSections: [
      { heading: "Distinguishing physical and chemical changes", body: "Physical changes alter appearance or state but not chemical identity — melting wax, dissolving sugar, crushing a can. Chemical changes produce new substances with different properties — burning produces ash and gases, rust is a different substance from iron, baking produces a cake that cannot be separated back into flour, eggs, and sugar. Tests for chemical change include colour change, gas production, temperature change, and new substance formation." },
      { heading: "Investigating dissolving", body: "Fair tests can investigate factors affecting dissolving rate: temperature (warmer water dissolves faster), stirring (speeds up), and particle size (smaller particles dissolve faster). To test solubility, add solute until no more dissolves — this is the saturation point. Different substances have different solubilities. Results should be recorded and graphed to identify patterns." },
    ],
    higherExamTips: [
      "Explain how to recover salt from salt water: evaporate the water (reversible change) leaving salt crystals behind.",
      "Give evidence that burning is a chemical change: new substances formed (ash, CO₂), energy released, cannot reverse.",
      "Design an investigation into what affects dissolving speed, identifying independent, dependent, and control variables.",
    ],
  }),
];

export function getKs2Content(slug: string): CurriculumTopicContent | undefined {
  return KS2_TOPIC_CONTENT.find((topic) => topic.slug === slug);
}


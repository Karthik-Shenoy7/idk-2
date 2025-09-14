// Biology Quiz Application with Complete 120 Question Bank - Enhanced Version
class BiologyQuiz {
    constructor() {
        // Complete question bank with all 120 questions from the PDF
        this.questionBank = [
            // Topic 1: Why Biology for Engineers (Questions 1-18)
            {"id": 1, "question": "The nose of the redesigned Shinkansen bullet train is inspired by", "options": ["Kingfisher beak", "Crane beak", "Owl beak", "Heron beak"], "correct": 0},
            {"id": 2, "question": "Passive cooling in skyscrapers is inspired by", "options": ["Termite Mounds", "Earthwork Mounds", "Ant Mounds", "Spiro Mounds"], "correct": 0},
            {"id": 3, "question": "Belt movement of military tanks was inspired by", "options": ["Caterpillar Movement", "Termite Movement", "Ant Movement", "Butterfly Movement"], "correct": 0},
            {"id": 4, "question": "Retinal prosthetic developed by scientists is approved by", "options": ["USFDA", "USEPA", "CPCB", "SPCB"], "correct": 0},
            {"id": 5, "question": "The gene from ____________ was used to develop genetically modified corn", "options": ["Bacillus thuringiensis", "Bacillus cereus", "Bacillus subtilis", "Bacillus anthracis"], "correct": 0},
            {"id": 6, "question": "Protein produced by Bacillus thuringiensis which has insecticide property is", "options": ["Cry Protein", "Res Protein", "Try Protein", "Taf Protein"], "correct": 0},
            {"id": 7, "question": "Biofertilizers have the potential to", "options": ["Replace chemical nitrogen and phosphorus", "Reduce crop yield", "Destimulate plant growth", "Reduce soil fertility"], "correct": 0},
            {"id": 8, "question": "In the case of self healing concrete the microstructure analysis can be done by", "options": ["SEM", "XRD", "FTIR", "XPS"], "correct": 0},
            {"id": 9, "question": "_______is a pollution control technique using a bioreactor containing living material", "options": ["Biofiltration", "Bioaugmentation", "Bioleaching", "Biomimetics"], "correct": 0},
            {"id": 10, "question": "A nanoparticle is a small particle that ranges between ____________", "options": ["1 to 100 nm", "1 to 100 mm", "1-1000 nm", "1-10 µm"], "correct": 0},
            {"id": 11, "question": "The tensile strength of carbon nanotubes is approximately ___ times greater than steel", "options": ["100", "10", "25", "50"], "correct": 0},
            {"id": 12, "question": "Who first used the term nanotechnology and when", "options": ["Norio Taniguchi, 1974", "Richard Feynman, 1959", "Eric Drexler, 1986", "Alexander Fleming, 1940"], "correct": 0},
            {"id": 13, "question": "The width of carbon nanotube is _____________", "options": ["0.5-2.5nm", "0.1-0.5nm", "2.5-4.5nm", "4.5-6.5 nm"], "correct": 0},
            {"id": 14, "question": "If 10 hydrogen atoms are laid side by side the length of this chain would be", "options": ["7 nm", "10nm", "2nm", "20nm"], "correct": 0},
            {"id": 15, "question": "Human hair is ________ nm in size", "options": ["50000-100000", "500-1000", "500000-1000000", "50-100"], "correct": 0},
            {"id": 16, "question": "The prefix nano comes from ______ word nanos which means dwarf", "options": ["Greek", "French", "Spanish", "Latin"], "correct": 0},
            {"id": 17, "question": "Why is there a need to switch to organic farming?", "options": ["Increasing environmental pollution", "Increasing poverty", "Increasing road accidents", "Increasing population"], "correct": 0},
            {"id": 18, "question": "Early detection of cancer can be achieved by", "options": ["AI", "CCD", "BBD", "MRIS"], "correct": 0},
            
            // Topic 2: Cell Properties and Types (Questions 19-41)
            {"id": 19, "question": "Prokaryotic cell size ranges from ____________ in diameter", "options": ["0.1 to 5.0 μm", "0.1 to 50 μm", "10 to 50 μm", "2 to 10 μm"], "correct": 0},
            {"id": 20, "question": "_____________do not have a true nucleus and membrane-bound organelles", "options": ["Prokaryotic cells", "Eukaryotic cells", "Plant cells", "Animal cells"], "correct": 0},
            {"id": 21, "question": "Mitochondria, Golgi bodies, chloroplast, and lysosomes are absent in", "options": ["Prokaryotic cells", "Eukaryotic cells", "Plant cells", "Animal cells"], "correct": 0},
            {"id": 22, "question": "____________ protein is important constituent of eukaryotic chromosomes", "options": ["Histone", "Heme", "Cistone", "Diastone"], "correct": 0},
            {"id": 23, "question": "The asexual mode of division in prokaryotes is by", "options": ["Binary fission", "Conjugation", "Ligation", "Mitosis"], "correct": 0},
            {"id": 24, "question": "The sexual mode of reproduction in prokaryotes is by", "options": ["Conjugation", "Binary fission", "Ligation", "Mitosis"], "correct": 0},
            {"id": 25, "question": "The outer protective covering found in the bacterial cells which helps in attachment is", "options": ["Capsule", "Cell wall", "Cell membrane", "Cytoplasm"], "correct": 0},
            {"id": 26, "question": "__________ are involved in protein synthesis", "options": ["Ribosomes", "Lysosomes", "Mitochondria", "Vacuoles"], "correct": 0},
            {"id": 27, "question": "______ are hair-like outgrowths that attach to the surface of other bacterial cells", "options": ["Pili", "Capsule", "Flagella", "Cilia"], "correct": 0},
            {"id": 28, "question": "__________ can be used to observe virus", "options": ["Electron Microscope", "Light Microscope", "Naked eye", "Fluorescent microscope"], "correct": 0},
            {"id": 29, "question": "__________ possess extrachromosomal DNA known as plasmids", "options": ["Bacteria", "Fungi", "Yeast", "Plant cell"], "correct": 0},
            {"id": 30, "question": "Cell wall of bacterial cell is composed of", "options": ["Peptidoglycan", "Protein", "Cellulose", "Chitin"], "correct": 0},
            {"id": 31, "question": "Chitin is the structural component present in ________ cell wall", "options": ["Fungal", "Bacterial", "Cyanobacterial", "Virus"], "correct": 0},
            {"id": 32, "question": "Gram Positive bacteria have thick layer of ___________", "options": ["Peptidoglycan", "Chitin", "Mannose", "Teichoic Acid"], "correct": 0},
            {"id": 33, "question": "Gram negative organisms are very _____________ to antibiotics", "options": ["Resistant", "Susceptible", "Receptive", "Vulnerable"], "correct": 0},
            {"id": 34, "question": "_________ content is very low in gram positive bacteria", "options": ["Lipid", "Carbohydrate", "Protein", "Fat"], "correct": 0},
            {"id": 35, "question": "Cell wall thickness of gram positive organism is", "options": ["20-80 nm", "2-8 nm", "200-800 nm", "150-300nm"], "correct": 0},
            {"id": 36, "question": "When gram positive bacteria is stained by gram staining technique and visualized under the microscope it looks", "options": ["Purple", "Pink", "Red", "Brown"], "correct": 0},
            {"id": 37, "question": "__________ needs to enter a living thing to perform its only function, which is to replicate", "options": ["Virus", "Bacteria", "Fungi", "Yeast"], "correct": 0},
            {"id": 38, "question": "___________ hijacks a person's cellular machinery to produce clones of itself", "options": ["Virus", "Bacteria", "Fungi", "Yeast"], "correct": 0},
            {"id": 39, "question": "Which of the following is not a typical shape of virus", "options": ["Trapezoid", "Polyhedral", "Spherical", "Helical"], "correct": 0},
            {"id": 40, "question": "________is commonly known as black bread mold", "options": ["Rhizopus stolonifer", "Rhizopus mucoraceae", "Aspergillus niger", "Candida albicans"], "correct": 0},
            {"id": 41, "question": "Which of the following is not a edible mushroom", "options": ["Amanita Mushrooms", "Oyster Mushrooms", "Morel Mushrooms", "Portobello Mushrooms"], "correct": 0},
            
            // Topic 3: Eukaryotes – Plant and Animal Cells (Questions 42-67)
            {"id": 42, "question": "The Greek word 'Eu' means", "options": ["well", "large", "round", "embryo"], "correct": 0},
            {"id": 43, "question": "Which of the following is a eukaryotic cell?", "options": ["protozoan", "virus", "bacteria", "None of these"], "correct": 0},
            {"id": 44, "question": "Which of the following is not a eukaryotic cell?", "options": ["bacteria", "protozoan", "fungi", "animal"], "correct": 0},
            {"id": 45, "question": "Which of the following is not a characteristic of eukaryotic cell?", "options": ["circular DNA", "membrane enclosed nucleus", "membrane bound organelles", "cytoskeleton"], "correct": 0},
            {"id": 46, "question": "The cell wall is present in", "options": ["only plant cells", "only animal cells", "plant and animal cells", "protozoans"], "correct": 0},
            {"id": 47, "question": "The following is not a function of the cell wall", "options": ["helps in water transport", "provides shape to cell", "cell to cell interaction", "protection against injury"], "correct": 0},
            {"id": 48, "question": "Cell membrane is also called as", "options": ["Plasma membrane", "Plasmalemma", "Cell wall", "nuclear membrane"], "correct": 0},
            {"id": 49, "question": "Cell membrane is made up of", "options": ["phospholipid bilayer", "phospholipid trilayer", "glycolipid layer", "phospholipid layer"], "correct": 0},
            {"id": 50, "question": "___________ positions the organelles in a cell", "options": ["Cytoskeleton", "Cytoplasm", "Cell membrane", "Cell wall"], "correct": 0},
            {"id": 51, "question": "___________ is the center of nucleus", "options": ["Nucleolus", "Nucleoplasm", "Nuclear Membrane", "Chromatin"], "correct": 0},
            {"id": 52, "question": "The function of ribosomes is _____", "options": ["protein synthesis", "chromatin synthesis", "endoplasmic reticulum synthesis", "enzyme synthesis"], "correct": 0},
            {"id": 53, "question": "Ribosome is attached to _____", "options": ["Endoplasmic reticulum", "golgi complex", "mitochondria", "lysosome"], "correct": 0},
            {"id": 54, "question": "The consistency of cytoplasm is _______", "options": ["semisolid", "solid", "liquid", "gaseous"], "correct": 0},
            {"id": 55, "question": "Which of the following is not a function of cytoskeleton?", "options": ["Transport of ions", "cell shape", "cell movement", "positions organelles"], "correct": 0},
            {"id": 56, "question": "In eukaryotic cells DNA is ________", "options": ["linear", "circular", "irregular", "flat"], "correct": 0},
            {"id": 57, "question": "The function of the nucleolus is to produce", "options": ["ribosomes", "proteins", "enzymes", "energy"], "correct": 0},
            {"id": 58, "question": "Ribosome is found attached to __________ and ________", "options": ["nucleus, ER", "ER, mitochondria", "nucleus, mitochondria", "nucleolus, mitochondria"], "correct": 0},
            {"id": 59, "question": "The function of ribosomes is _____", "options": ["protein synthesis", "enzyme synthesis", "energy synthesis", "DNA synthesis"], "correct": 0},
            {"id": 60, "question": "The synthesis of cholesterol is done by _______", "options": ["smooth ER", "Rough ER", "Golgi complex", "centromere"], "correct": 0},
            {"id": 61, "question": "The molecule that functions as energy for cells is ________", "options": ["Adenosine Tri Phosphate", "Adenosine Di Phosphate", "Adenosine Mono Phosphate", "Adenosine Phosphate"], "correct": 0},
            {"id": 62, "question": "The matrix of the mitochondria in animal cells contains DNA and ________", "options": ["ribosomes", "vacuoles", "centrioles", "Endoplasmic Reticulum"], "correct": 0},
            {"id": 63, "question": "The Golgi complex releases ________ for package and transport of proteins", "options": ["vesicles", "ribosomes", "vacuoles", "centrioles"], "correct": 0},
            {"id": 64, "question": "____________ are called as suicide bags of the cells", "options": ["lysosomes", "centrioles", "vacuoles", "centromeres"], "correct": 0},
            {"id": 65, "question": "The cytoskeletal components are synthesized by _________ in the animal cell", "options": ["centromere", "ribosomes", "vacuoles", "vesicles"], "correct": 0},
            {"id": 66, "question": "The membrane around the vacuole is called as", "options": ["tonoplast", "chloroplast", "leucoplast", "centroplast"], "correct": 0},
            {"id": 67, "question": "The shape of plant cells is __________", "options": ["rectangular", "circular", "irregular", "flat"], "correct": 0},
            
            // Topic 4: Biomolecules (Questions 68-100)
            {"id": 68, "question": "Which of the following is not a biomolecule?", "options": ["Calcium sulphate", "Carbohydrates", "Lipids", "Nucleic Acids"], "correct": 0},
            {"id": 69, "question": "Lipid is comprised on fatty acids and _____", "options": ["Glycerol", "Alcohol", "Hydrocarbon", "Butanol"], "correct": 0},
            {"id": 70, "question": "Palmitic acid is designated as ____", "options": ["C16", "C14", "C18", "C20"], "correct": 0},
            {"id": 71, "question": "Fatty acids with no double bonds are ________", "options": ["Saturated", "Unsaturated", "Transaturated", "Cisaturated"], "correct": 0},
            {"id": 72, "question": "Which of the following is not a type of lipids?", "options": ["Saturated lipids", "Simple lipids", "Complex lipids", "Derived lipids"], "correct": 0},
            {"id": 73, "question": "Which is a type of Derived lipids?", "options": ["Steroids", "Phospholipids", "Glycolipids", "Waxes"], "correct": 0},
            {"id": 74, "question": "Phospholipids contain fatty acids, glycerol and a ___", "options": ["phosphate group", "phosphorous atom", "phosphoric acid", "none of these"], "correct": 0},
            {"id": 75, "question": "Glycolipids contain fatty acids, glycerol and ______", "options": ["carbohydrates", "glucose", "sucrose", "fructose"], "correct": 0},
            {"id": 76, "question": "Terpenes are components of essential oils secreted by ______", "options": ["plant cells", "insects", "animal cells", "fungi"], "correct": 0},
            {"id": 77, "question": "The component of cell membrane is ________", "options": ["phospholipid", "glycolipid", "sphingolipid", "lipoproteins"], "correct": 0},
            {"id": 78, "question": "_______ is present in the myelin sheath of nerve fibres", "options": ["sphingolipid", "phospholipid", "glycolipid", "lipoproteins"], "correct": 0},
            {"id": 79, "question": "The general formula for carbohydrates is ___", "options": ["Cn(H2O)n", "Cn+1(H2O)n", "Cn(H2nO)n", "Cn+1(H2nO)n2"], "correct": 0},
            {"id": 80, "question": "Which of the following is not a type of complex carbohydrate?", "options": ["monosaccharide", "disaccharide", "oligosaccharide", "polysaccharide"], "correct": 0},
            {"id": 81, "question": "Based on _________, carbohydrates are classified into aldoses and ketoses", "options": ["functional group", "no of carbon atoms", "double bonds", "number of saccharides"], "correct": 0},
            {"id": 82, "question": "Ribose is an example for ______", "options": ["pentose", "hexose", "triose", "heptose"], "correct": 0},
            {"id": 83, "question": "Starch is a _________", "options": ["polysaccharide", "oligosaccharide", "monosaccharide", "disaccharide"], "correct": 0},
            {"id": 84, "question": "_____ sugar present in legumes etc causes flatulence", "options": ["raffinose", "starch", "glycogen", "cellulose"], "correct": 0},
            {"id": 85, "question": "There are ____ amino acids divided into ___ groups", "options": ["20, 7", "25, 7", "20, 8", "25, 8"], "correct": 0},
            {"id": 86, "question": "Amino acids are joined by _______ bonds", "options": ["peptide bond", "phosphodiester bond", "hydroxyl bond", "amine bond"], "correct": 0},
            {"id": 87, "question": "Which of the following is an acidic amino acid?", "options": ["glutamine", "glycine", "alanine", "leucine"], "correct": 0},
            {"id": 88, "question": "Pleated sheet and alpha helix are types of ________ structures of proteins", "options": ["secondary", "primary", "tertiary", "quaternary"], "correct": 0},
            {"id": 89, "question": "In an alpha helix there exists ___ amino acids per turn", "options": ["3.6", "4", "3.8", "3"], "correct": 0},
            {"id": 90, "question": "Beta pleated sheets are joined on their sides by ________ bonds", "options": ["hydrogen", "hydroxyl", "amine", "peptide"], "correct": 0},
            {"id": 91, "question": "__________ strengthens bones and skin", "options": ["Collagen", "Raffinose", "actin", "myosin"], "correct": 0},
            {"id": 92, "question": "Actin and myosin are the proteins involved in", "options": ["muscle contraction", "bone strengthening", "blood circulation", "immune development"], "correct": 0},
            {"id": 93, "question": "Antibodies are _______", "options": ["proteins", "fats", "carbohydrates", "lipids"], "correct": 0},
            {"id": 94, "question": "The process of synthesis of proteins from RNA is _______", "options": ["translation", "transcription", "replication", "transfusion"], "correct": 0},
            {"id": 95, "question": "In RNA, the nitrogenous base __________ is replaced by uracil", "options": ["thymine", "adenine", "guanine", "cytosine"], "correct": 0},
            {"id": 96, "question": "________ attached to the phosphate group is called nucleotide in case of nucleic acids", "options": ["Nucleoside", "Base", "Sugar", "Phosphodiester bond"], "correct": 0},
            {"id": 97, "question": "Adenine: Guanine:: Cytosine:________ in DNA", "options": ["Thymine", "Uracil", "Purine", "Pyrimidine"], "correct": 0},
            {"id": 98, "question": "The strands of DNA run _______ to each other", "options": ["Anti-parallel", "parallel", "obtuse", "horizontal"], "correct": 0},
            {"id": 99, "question": "The nitrogenous bases in DNA pair by _________", "options": ["hydrogen bonds", "phosphodiester bonds", "peptide bonds", "phosphotriester bonds"], "correct": 0},
            {"id": 100, "question": "________ carries the genetic information of DNA to be used for protein synthesis", "options": ["messenger RNA", "transfer RNA", "ribosomal RNA", "information RNA"], "correct": 0},
            
            // Topic 5: Life Processes at Cellular Level (Questions 101-120)
            {"id": 101, "question": "What is not produced during photosynthesis?", "options": ["Carbon dioxide", "Oxygen", "Organic compounds", "Glucose"], "correct": 0},
            {"id": 102, "question": "What is the source of energy for photosynthesis to take place?", "options": ["Light", "ATP", "Water", "Oxygen"], "correct": 0},
            {"id": 103, "question": "Calvin's cycle takes place in the _______", "options": ["Stroma", "Thylakoids", "Grana", "Chlorophyll"], "correct": 0},
            {"id": 104, "question": "Photosynthesis doesn't depend on _______", "options": ["Chlorophyll content", "Temperature", "Light intensity", "Carbon dioxide"], "correct": 0},
            {"id": 105, "question": "ATP is a ________ derivative", "options": ["Nucleotide", "Nucleoside", "Protein", "Lipid"], "correct": 0},
            {"id": 106, "question": "_________ of the ATP contains large amount of energy in the form of high energy electrons", "options": ["Phosphate bonds", "Sugar", "Nitrogenous base", "Nucleotide"], "correct": 0},
            {"id": 107, "question": "The process by which cell breaks down glucose to give ATP is _______", "options": ["Respiration", "Photosynthesis", "Mitosis", "Meiosis"], "correct": 0},
            {"id": 108, "question": "Electron transport occurs in ______ of mitochondria", "options": ["Cristae", "Matrix", "Cytoplasm", "Grana"], "correct": 0},
            {"id": 109, "question": "In aerobic respiration, one glucose molecule releases _____ molecules of ATP", "options": ["38", "2", "22", "18"], "correct": 0},
            {"id": 110, "question": "In anaerobic respiration, one glucose releases _ molecules of ATP", "options": ["2", "38", "22", "18"], "correct": 0},
            {"id": 111, "question": "The function of DNA polymerase is ______", "options": ["To join nucleotides to form new DNA strand", "Break hydrogen bonds", "Unwind DNA strand", "Replicate DNA"], "correct": 0},
            {"id": 112, "question": "Glucose breaks down to form two pyruvate molecules in _", "options": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Photosynthesis"], "correct": 0},
            {"id": 113, "question": "In krebs cycle pyruvate is broken down to give hydrogen and ________", "options": ["Carbon dioxide", "Oxygen", "ATP", "Energy"], "correct": 0},
            {"id": 114, "question": "DNA replication is forming multiple copies of _______", "options": ["Chromosomes", "RNA", "Genetic material", "Heredity"], "correct": 0},
            {"id": 115, "question": "Which of the following is not a step in mitosis?", "options": ["Interphase", "Prophase", "Metaphase", "Anaphase"], "correct": 0},
            {"id": 116, "question": "Cell grows and prepares for mitosis in ________ step", "options": ["Interphase", "Prophase", "Metaphase", "Anaphase"], "correct": 0},
            {"id": 117, "question": "After cell division the divided cells are referred to as _______ cells", "options": ["Daughter", "Son", "Offspring", "Product"], "correct": 0},
            {"id": 118, "question": "Chromatids are joined by ______ in prophase", "options": ["Centromeres", "Lysosomes", "Microtubules", "Cytoskeleton"], "correct": 0},
            {"id": 119, "question": "In cytokinesis ________", "options": ["Two daughter cells are formed", "Two chromosomes are formed", "Chromatids divide", "Spindle fibres are formed"], "correct": 0},
            {"id": 120, "question": "In photosynthesis raw materials are _______", "options": ["Carbon dioxide and water", "Oxygen and water", "Hydrogen and water", "Carbon dioxide and Oxygen"], "correct": 0}
        ];

        // Admin credentials
        this.adminCredentials = {
            username: "WHITEDEV",
            password: "HAREKRSNA"
        };

        // Quiz state
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.studentName = '';
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.results = null;
    }

    init() {
        console.log('Initializing Biology Quiz with Complete 120 Question Bank...');
        this.initializeStorage();
        this.attachEventListeners();
        this.showScreen('welcomeScreen');
        
        // Focus name input
        setTimeout(() => {
            const nameInput = document.getElementById('studentName');
            if (nameInput) {
                nameInput.focus();
            }
        }, 200);
    }

    initializeStorage() {
        try {
            const saved = localStorage.getItem('biologyQuizData');
            if (!saved) {
                localStorage.setItem('biologyQuizData', JSON.stringify([]));
            }
        } catch (e) {
            console.warn('localStorage not available');
        }
    }

    attachEventListeners() {
        // Use event delegation and direct assignment
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        document.addEventListener('keypress', this.handleGlobalKeypress.bind(this));
    }

    handleGlobalClick(event) {
        const target = event.target;
        const id = target.id;
        
        // Handle all button clicks
        switch (id) {
            case 'startQuiz':
                event.preventDefault();
                this.startQuiz();
                break;
            case 'adminGear':
                event.preventDefault();
                this.showAdminModal();
                break;
            case 'prevQuestion':
                event.preventDefault();
                this.navigateQuestion(-1);
                break;
            case 'nextQuestion':
                event.preventDefault();
                this.navigateQuestion(1);
                break;
            case 'submitQuiz':
                event.preventDefault();
                this.submitQuiz();
                break;
            case 'reviewAnswers':
                event.preventDefault();
                this.showReviewScreen();
                break;
            case 'retakeQuiz':
                event.preventDefault();
                this.retakeQuiz();
                break;
            case 'backToResults':
                event.preventDefault();
                this.showResults();
                break;
            case 'closeAdminModal':
            case 'cancelAdminLogin':
                event.preventDefault();
                this.hideAdminModal();
                break;
            case 'adminLogin':
                event.preventDefault();
                this.handleAdminLogin();
                break;
            case 'adminLogout':
                event.preventDefault();
                this.adminLogout();
                break;
            case 'exportData':
                event.preventDefault();
                this.exportData();
                break;
        }

        // Handle option selection
        if (target.closest('.option')) {
            const option = target.closest('.option');
            const value = parseInt(option.dataset.value);
            const question = this.currentQuestions[this.currentQuestionIndex];
            this.selectAnswer(question.id, value);
        }

        // Handle modal backdrop
        if (target.id === 'adminModal') {
            this.hideAdminModal();
        }
    }

    handleGlobalKeypress(event) {
        if (event.key === 'Enter') {
            const target = event.target;
            if (target.id === 'studentName') {
                event.preventDefault();
                this.startQuiz();
            } else if (target.id === 'adminPassword') {
                event.preventDefault();
                this.handleAdminLogin();
            }
        }
    }

    // Enhanced shuffling function for options within questions
    shuffleQuestionOptions(question) {
        const shuffledQuestion = { ...question };
        const originalOptions = [...question.options];
        const originalCorrect = question.correct;
        
        // Create array of indices and shuffle
        const indices = [0, 1, 2, 3];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Reorder options and update correct answer
        shuffledQuestion.options = indices.map(index => originalOptions[index]);
        shuffledQuestion.correct = indices.indexOf(originalCorrect);
        
        return shuffledQuestion;
    }

    // NEW: Function to randomly select 40 questions from 120
    selectRandomQuestions(count = 40) {
        console.log(`Selecting ${count} random questions from ${this.questionBank.length} available questions...`);
        
        // Create a copy of question bank to avoid modifying original
        const availableQuestions = [...this.questionBank];
        const selectedQuestions = [];
        
        // Randomly select questions
        for (let i = 0; i < count && availableQuestions.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions.splice(randomIndex, 1)[0];
            selectedQuestions.push(selectedQuestion);
        }
        
        console.log(`Selected ${selectedQuestions.length} questions with IDs:`, selectedQuestions.map(q => q.id));
        return selectedQuestions;
    }

    startQuiz() {
        console.log('Starting quiz...');
        
        const nameInput = document.getElementById('studentName');
        const name = nameInput ? nameInput.value.trim() : '';
        
        if (!name) {
            alert('Please enter your name to start the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = name;
        this.setupQuizWithShuffling();
        this.showScreen('quizScreen');
        this.startTimer();
    }

    setupQuizWithShuffling() {
        console.log('Setting up quiz with enhanced shuffling...');
        
        // Step 1: Randomly select 40 questions from 120
        this.currentQuestions = this.selectRandomQuestions(40);
        
        // Step 2: Shuffle the order of selected questions
        this.currentQuestions = this.currentQuestions.sort(() => Math.random() - 0.5);
        
        // Step 3: Shuffle options within each question
        this.currentQuestions = this.currentQuestions.map(question => 
            this.shuffleQuestionOptions(question)
        );
        
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();
        
        const totalEl = document.getElementById('totalQuestions');
        if (totalEl) totalEl.textContent = this.currentQuestions.length;
        
        console.log('Quiz setup complete with:', {
            selectedQuestions: this.currentQuestions.length,
            questionIds: this.currentQuestions.map(q => q.id).slice(0, 10) + '...' // Show first 10 IDs
        });
        
        this.displayQuestion();
    }

    startTimer() {
        this.timeRemaining = 20 * 60;
        this.updateTimerDisplay();
        
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            const timerEl = document.querySelector('.timer');
            if (this.timeRemaining <= 300 && timerEl) {
                timerEl.classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeEl = document.getElementById('timeDisplay');
        if (timeEl) {
            timeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        
        const currentEl = document.getElementById('currentQuestion');
        const textEl = document.getElementById('questionText');
        
        if (currentEl) currentEl.textContent = questionNum;
        if (textEl) textEl.textContent = question.question;
        
        // Update progress
        const progress = (questionNum / this.currentQuestions.length) * 100;
        const progressEl = document.getElementById('progressFill');
        if (progressEl) progressEl.style.width = `${progress}%`;
        
        this.displayOptions(question);
        this.updateNavigationButtons();
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = index;
            
            if (this.userAnswers[question.id] === index) {
                optionEl.classList.add('selected');
            }
            
            optionEl.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            container.appendChild(optionEl);
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'inline-flex' : 'none';
        }
        
        const isLast = this.currentQuestionIndex === this.currentQuestions.length - 1;
        
        if (nextBtn) nextBtn.style.display = isLast ? 'none' : 'inline-flex';
        if (submitBtn) submitBtn.style.display = isLast ? 'inline-flex' : 'none';
    }

    selectAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const selectedOpt = document.querySelector(`[data-value="${answerIndex}"]`);
        if (selectedOpt) selectedOpt.classList.add('selected');
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.currentQuestions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) clearInterval(this.timer);
        this.endTime = new Date();
        this.calculateResults();
        this.saveQuizData();
        this.showResults();
    }

    calculateResults() {
        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach(q => {
            const answer = this.userAnswers[q.id];
            if (answer === undefined) unanswered++;
            else if (answer === q.correct) correct++;
            else wrong++;
        });
        
        this.results = {
            correct, wrong, unanswered,
            total: this.currentQuestions.length,
            percentage: Math.round((correct / this.currentQuestions.length) * 100),
            timeTaken: this.endTime - this.startTime
        };
    }

    showResults() {
        const { correct, wrong, unanswered, percentage, timeTaken } = this.results;
        
        const scoreEl = document.getElementById('scorePercent');
        const nameEl = document.getElementById('resultStudentName');
        const correctEl = document.getElementById('correctAnswers');
        const wrongEl = document.getElementById('wrongAnswers');
        const unansweredEl = document.getElementById('unansweredQuestions');
        const timeEl = document.getElementById('timeTaken');
        
        if (scoreEl) scoreEl.textContent = `${percentage}%`;
        if (nameEl) nameEl.textContent = this.studentName;
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        const minutes = Math.floor(timeTaken / 60000);
        const seconds = Math.floor((timeTaken % 60000) / 1000);
        if (timeEl) timeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Update score circle
        const circle = document.querySelector('.score-circle');
        if (circle) {
            const deg = (percentage / 100) * 360;
            circle.style.background = `conic-gradient(var(--color-primary) ${deg}deg, rgba(50, 184, 198, 0.1) ${deg}deg)`;
        }
        
        this.showScreen('resultsScreen');
    }

    showReviewScreen() {
        const { correct, wrong, unanswered } = this.results;
        
        const correctEl = document.getElementById('reviewCorrect');
        const wrongEl = document.getElementById('reviewWrong');
        const unansweredEl = document.getElementById('reviewUnanswered');
        
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        this.generateReviewContent();
        this.showScreen('reviewScreen');
    }

    generateReviewContent() {
        const container = document.getElementById('reviewContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === undefined;
            
            let status = 'unanswered';
            let icon = '❓';
            if (!isUnanswered) {
                status = isCorrect ? 'correct' : 'wrong';
                icon = isCorrect ? '✅' : '❌';
            }
            
            const reviewEl = document.createElement('div');
            reviewEl.className = `review-question ${status}`;
            
            let optionsHTML = '';
            question.options.forEach((option, optIndex) => {
                const isCorrectOpt = optIndex === question.correct;
                const isUserOpt = optIndex === userAnswer;
                
                let optClass = '';
                let optIcon = '';
                
                if (isCorrectOpt) {
                    optClass = 'correct';
                    optIcon = '✅';
                } else if (isUserOpt && !isCorrectOpt) {
                    optClass = 'user-wrong';
                    optIcon = '❌';
                }
                
                optionsHTML += `
                    <div class="review-option ${optClass}">
                        <span class="review-option-label">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="review-option-text">${option}</span>
                        ${optIcon ? `<span class="review-option-icon">${optIcon}</span>` : ''}
                    </div>
                `;
            });
            
            reviewEl.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Q${index + 1}</span>
                    <span class="review-status-icon">${icon}</span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">${optionsHTML}</div>
            `;
            
            container.appendChild(reviewEl);
        });
    }

    saveQuizData() {
        try {
            const data = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
            data.push({
                name: this.studentName,
                score: this.results.percentage,
                correct: this.results.correct,
                wrong: this.results.wrong,
                unanswered: this.results.unanswered,
                timeTaken: this.results.timeTaken,
                date: new Date().toISOString(),
                answers: { ...this.userAnswers },
                questionIds: this.currentQuestions.map(q => q.id) // Track which questions were used
            });
            localStorage.setItem('biologyQuizData', JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save quiz data');
        }
    }

    retakeQuiz() {
        this.userAnswers = {};
        this.currentQuestionIndex = 0;
        this.results = null;
        
        const timer = document.querySelector('.timer');
        if (timer) timer.classList.remove('warning');
        
        this.showScreen('welcomeScreen');
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
            setTimeout(() => nameInput.focus(), 100);
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
    }

    // Admin functions
    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.classList.remove('hidden');
            const username = document.getElementById('adminUsername');
            if (username) setTimeout(() => username.focus(), 100);
        }
    }

    hideAdminModal() {
        const modal = document.getElementById('adminModal');
        const error = document.getElementById('adminError');
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        
        if (modal) modal.classList.add('hidden');
        if (error) error.classList.add('hidden');
        if (username) username.value = '';
        if (password) password.value = '';
    }

    handleAdminLogin() {
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        const error = document.getElementById('adminError');
        
        const user = username ? username.value : '';
        const pass = password ? password.value : '';
        
        if (user === this.adminCredentials.username && pass === this.adminCredentials.password) {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            if (error) {
                error.textContent = 'Invalid username or password';
                error.classList.remove('hidden');
            }
        }
    }

    showAdminDashboard() {
        this.loadAdminData();
        this.showScreen('adminScreen');
    }

    loadAdminData() {
        try {
            const data = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
            
            const total = data.length;
            const average = total > 0 ? Math.round(data.reduce((sum, entry) => sum + entry.score, 0) / total) : 0;
            
            const totalEl = document.getElementById('totalParticipants');
            const avgEl = document.getElementById('averageScore');
            const rateEl = document.getElementById('completionRate');
            
            if (totalEl) totalEl.textContent = total;
            if (avgEl) avgEl.textContent = `${average}%`;
            if (rateEl) rateEl.textContent = '100%';
            
            const tbody = document.getElementById('participantTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                data.forEach(entry => {
                    const row = document.createElement('tr');
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    row.innerHTML = `
                        <td>${entry.name}</td>
                        <td>${entry.score}%</td>
                        <td>${entry.correct}</td>
                        <td>${entry.wrong}</td>
                        <td>${entry.unanswered}</td>
                        <td>${time}</td>
                        <td>${date}</td>
                    `;
                    tbody.appendChild(row);
                });
            }
        } catch (e) {
            console.warn('Error loading admin data');
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    exportData() {
        try {
            const data = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
            if (data.length === 0) {
                alert('No data to export');
                return;
            }
            
            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csv = [
                headers.join(','),
                ...data.map(entry => {
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    return [
                        `"${entry.name}"`,
                        entry.score,
                        entry.correct,
                        entry.wrong,
                        entry.unanswered,
                        time,
                        date
                    ].join(',');
                })
            ].join('\n');
            
            const blob = new Blob([csv], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `biology_quiz_${new Date().toISOString().split('T')[0]}.csv`;
            link.click();
        } catch (e) {
            alert('Error exporting data');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing complete quiz with 120 questions...');
    window.biologyQuiz = new BiologyQuiz();
    window.biologyQuiz.init();
});
// Hide loading screen after 2.5 seconds

window.addEventListener("load", () => {

    setTimeout(() => {

        const logo = document.getElementById("logo");

        logo.style.opacity = "0";

        setTimeout(() => {
            logo.style.display = "none";
        }, 500);

    }, 2500);

});

const patterns = {
   blanket: {
        title: " Cozy Blanket Squares",
        difficulty: "beginner",
        materials: [
            "Chunky or Worsted weight yarn",
            "6.0mm Crochet Hook (or size matching your yarn)",
            "Yarn needle for sewing squares together"
        ],
        abbreviations: "ch: chain | dc: double crochet | st: stitch",
        steps: [
            "Start with a slip knot and leave a 6-inch tail.",
            "Chain (ch) 20 stitches loosely to create your base row.",
            "Row 1: Work a double crochet (dc) into the 4th chain from your hook, then work 1 dc into every remaining chain stitch across.",
            "Row 2: Chain 3 (counts as your first dc), turn your work, and work 1 dc into each stitch across the row.",
            "Repeat Row 2 until your square is perfectly symmetrical (usually about 10-12 rows total). Fasten off.",
            "Once you have made multiple squares, lay them out in a grid and use a yarn needle to sew the edges together to form your blanket!"
        ]
    },

    coaster: {
    title: " Spiral Tea Coaster",
    difficulty: "beginner",
    materials: [
        "Cotton yarn (best for absorbing moisture!)",
        "4.0mm Crochet Hook",
        "Stitch marker & tapestry needle"
    ],
    abbreviations: "mr: magic ring | dc: double crochet | inc: increase (2 dc in same stitch) | sl st: slip stitch",
    steps: [
        "Start with a Magic Ring (mr).",
        "Round 1: Chain 2 (does not count as a stitch), then work 12 double crochets (dc) into the ring. Pull the yarn tail tight to close the center hole. Slip stitch (sl st) to the first dc to join. (12 stitches)",
        "Round 2: Chain 2. Work an increase (inc)—which means 2 dc—into every single stitch around. Join with a sl st to the first dc. (24 stitches)",
        "Round 3: Chain 2. *Work 1 dc in the first stitch, then work an increase (2 dc) in the next stitch. Repeat from * all the way around. Join with a sl st. (36 stitches)",
        "Round 4 (Border): Chain 1. Slip stitch loosely into each stitch around the entire edge to give it a clean, sturdy rim. Fasten off and weave in the ends!"
    ]
},

  bookmark: {
    title: " Leafy Aesthetic Bookmark",
    difficulty: "intermediate",
    materials: [
        "Fine or sport weight cotton yarn",
        "3.5mm Crochet Hook",
        "Optional: A wooden bead or tassel for the bottom"
    ],
    abbreviations: "ch: chain | sc: single crochet | dc: double crochet | sl st: slip stitch",
    steps: [
        "Base Chain: Chain (ch) 30 stitches to create the core length of your bookmark.",
        "Row 1: Single crochet (sc) into the second chain from your hook and in each stitch across to the end. Chain 1 and turn.",
        "Rows 2-3: Work 1 sc into each stitch across to build a solid rectangular center strip. Do not fasten off at the end of Row 3.",
        "Leaf Edge Design: Working along the long edge of the strip, *skip 2 stitches, work [2 dc, ch 2, 2 dc] into the next stitch to form a leafy shell, skip 2 stitches, sl st into the next.* Repeat this sequence down the sides to create the decorative vine frame.",
        "Blocking & Finishing: Fasten off your yarn. Wet block the bookmark by dampening it slightly and pinning it flat until dry so the edges don't curl, then attach a tassel or bead to the bottom!"
    ]
},

headband: {
    title: " Twisted Cozy Headband",
    difficulty: "beginner",
    materials: [
        "Worsted or chunky weight yarn",
        "5.5mm or 6.0mm Crochet Hook",
        "Yarn needle for sewing the twist"
    ],
    abbreviations: "ch: chain | hdc: half double crochet | blo: back loop only",
    steps: [
        "Base Row: Chain (ch) 15 to 20 stitches (this determines how wide your headband will be).",
        "Row 1: Half double crochet (hdc) into the second chain from your hook and into each stitch across. Chain 1, turn.",
        "Row 2 (Ribbing Effect): Work 1 hdc into the **back loop only (blo)** of every stitch across. This creates that beautiful, stretchy knit-look texture. Chain 1, turn.",
        "Repeat Row 2 until your ribbed strip is long enough to fit snugly around your head (typically about 18-20 inches long for adults). Fasten off, leaving a long 12-inch tail for sewing.",
        "The Magic Twist: Fold the long rectangle strip in half lengthwise. Interlock the two open ends together like two interlocking 'C' shapes (or sandwiching them together). Use your yarn needle to sew straight through all four layers of yarn, secure with a knot, and flip the headband inside out to reveal the perfect twist!"
    ]
},

grannySquare: {
    title: " Classic Granny Square",
    difficulty: "beginner",
    materials: [
        "Worsted weight yarn (multiple colors)",
        "5.0mm Crochet Hook",
        "Scissors & yarn needle"
    ],
    abbreviations: "ch: chain | dc: double crochet | cl: cluster (3 dc in same space) | sl st: slip stitch",
    steps: [
        "Center: Magic Ring, ch 3 (counts as first dc), work 2 dc into ring, ch 2. *Work 3 dc into ring, ch 2. Repeat from * 2 more times. Join with sl st to top of starting ch-3.",
        "Round 2: Sl st into the next ch-2 corner space. Ch 3, 2 dc, ch 2, 3 dc in same corner space. *Ch 1, [3 dc, ch 2, 3 dc] in next corner space. Repeat from * around. Join with sl st.",
        "Round 3: Sl st to corner. Ch 3, 2 dc, ch 2, 3 dc in corner space. *Ch 1, 3 dc in next side space, ch 1, [3 dc, ch 2, 3 dc] in corner. Repeat from * around. Join with sl st.",
        "Continue adding rounds following the same 'cluster in space' logic until your square reaches the desired size. Fasten off and weave in ends."
    ]
},

keychain: {
    title: " Mini Flower Keychain",
    difficulty: "beginner",
    materials: [
        "Cotton yarn scraps",
        "3.0mm or 3.5mm Crochet Hook",
        "Metal keychain ring",
        "Fiberfill (optional, for stuffing)"
    ],
    abbreviations: "mr: magic ring | sc: single crochet | hdc: half double crochet | dc: double crochet | sl st: slip stitch",
    steps: [
        "Center: Create a Magic Ring (mr).",
        "Petals: Work [ch 2, 3 dc, ch 2, sl st] into the ring 5 times to create 5 petals.",
        "Closing: Pull the magic ring tail tight to gather the petals into a flower shape. Sl st to the first petal base and fasten off, leaving a long tail.",
        "Assembly: Thread the long tail through your metal keychain ring, loop it back through the center of the flower, and knot securely.",
        "Finishing: Use a dab of fabric glue or weave the tail ends deeply into the back of the petals so it doesn't snag on your keys!"
    ]
},

cardigan: {
        title: " Granny Square Patchwork Cardigan",
        difficulty: "advanced beginner",
        materials: [
            "Worsted weight yarn (4-5 coordinating colors)",
            "5.5mm (I-9) Crochet Hook",
            "Yarn needle & scissors",
            "4-5 wooden buttons (optional)"
        ],
        abbreviations: "ch: chain | dc: double crochet | sl st: slip stitch | st(s): stitch(es)",
        steps: [
            "Step 1 (The Squares): Crochet a total of 42 standard 4-round granny squares using your color palette. Ensure your tension remains uniform across all squares.",
            "Step 2 (The Layout): Block your squares flat. Lay them out on a flat surface to arrange the color pattern: 12 squares for the back panel, 6 squares for each front panel (12 total), and 9 squares for each sleeve (18 total).",
            "Step 3 (Assembly): Using your yarn needle and a join-as-you-go method or a mattress stitch, seam the squares together into their respective panels, then join the shoulders and sides.",
            "Step 4 (Ribbing & Border): Attach yarn to the bottom corner. Work rows of front-post/back-post double crochet ribbing along the entire bottom hem, cuffs, and up along the front neck opening. Add buttonholes on one side if desired."
        ]
    },
    dragon: {
        title: " Mythical Dragon Amigurumi",
        difficulty: "advanced",
        materials: [
            "Worsted weight yarn in main and accent colors",
            "3.25mm (D) crochet hook",
            "12mm safety eyes, fiberfill stuffing",
            "Wire or pipe cleaners (optional for posable wings)"
        ],
        abbreviations: "mr: magic ring | sc: single crochet | inc: increase | dec: decrease",
        steps: [
            "Step 1 (Head & Body): Crochet a seamless, teardrop-shaped base starting with an mr of 6 sc, scaling up to 36 sc, stuffing firmly as you decrease back down to close.",
            "Step 2 (The Wings): Work flat rows using a mix of single and half-double crochets, back-loop-only stitches, and chain-spaces to create a ribbed, webbed wing aesthetic.",
            "Step 3 (Snout & Horns): Crochet small conical pieces in accent colors to form the snout, back spikes, and horns.",
            "Step 4 (Assembly): Pin all components safely to the main body to check symmetry, then use a sturdy mattress stitch to secure the limbs, wings, and accent details."
        ]
    },

    mandala: {
        title: " Sacred Geometry Crochet Mandala",
        difficulty: "intermediate",
        materials: [
            "Sport weight cotton yarn (4-6 vibrant colors)",
            "3.0mm crochet hook",
            "10-inch steel metal ring or embroidery hoop",
            "Yarn needle for finishing stitches"
        ],
        abbreviations: "ch: chain | dc: double crochet | tr: treble crochet | cluster: group of sts",
        steps: [
            "Step 1 (The Core): Start with a magic ring. Alternate rows of standard double crochet clusters and chain loops, swapping colors every round to establish the contrast.",
            "Step 2 (The Webbing): Introduce advanced combinations like puff stitches and front-post treble crochets (fptr) to create dramatic, radiating texture lines.",
            "Step 3 (The Points): End the final circular rounds with lace-like fan stitches or picots to give the outer rim a classic starburst pattern layout.",
            "Step 4 (Hoop Mounting): Lay the mandala inside your metal ring. Secure it evenly by single-crocheting or slip-stitching around both the outer edge loops and the hoop simultaneously."
        ]
    },

    advancedBlanket: {
        title: " Heirloom Textures Intricate Blanket",
        difficulty: "advanced",
        materials: [
            "Aran or worsted weight yarn (approx. 2000-2500 yards)",
            "6.0mm (J-10) crochet hook",
            "Stitch markers (highly recommended for tracking pattern repeats)"
        ],
        abbreviations: "fpdc: front post double crochet | bpdc: back post | popcorn: 5 dc in 1 st",
        steps: [
            "Step 1 (Foundation): Chain a wide base multiple (e.g., 120 + 3) to establish your layout width. Work a solid foundation row of half double crochets.",
            "Step 2 (Cable Textures): Alternate front-post and back-post double crochets over sections of stitches to weave gorgeous, raised braided cables into the fabric.",
            "Step 3 (Popcorn Motifs): Introduce row sections of popcorn or diamond lattice stitches to break up the dense textures with geometric, 3D surface details.",
            "Step 4 (The Border): Once the desired length is hit, work a thick 4-sided structural frame of alternating post stitches to ensure the massive blanket lays perfectly flat."
        ]
    },

    bouquet: {
        title: " Forever-Blooming Flower Bouquet",
        difficulty: "intermediate",
        materials: [
            "Fine/fingering weight cotton yarn (Red, Pink, Green, Yellow)",
            "2.5mm crochet hook",
            "22-gauge floral stem wires and green floral tape",
            "Hot glue or fabric glue"
        ],
        abbreviations: "ch: chain | sc: single crochet | hdc: half double | dc: double crochet",
        steps: [
            "Step 1 (The Roses): Crochet a long, scalloped structural strip of progressive stitches (sc, hdc, dc). Roll the strip tightly onto itself to form a rosebud and glue the base.",
            "Step 2 (The Daisies): Work a magic ring with yellow yarn, then chain outward and slip-stitch back into the center ring repeatedly to form clean, delicate white petals.",
            "Step 3 (Stems & Sepals): Crochet a small green cone (sepal) to slide onto the bottom of each flower. Thread a floral wire through the center and wrap it tightly in green tape.",
            "Step 4 (Arrangement): Gather your completed wire-stiffened flowers, tuck in a few separately crocheted green leaves, and wrap the bundle in craft paper or tie with a ribbon!"
        ]
    },
    
    toteBag: {
        title: " Everyday Aesthetic Tote Bag",
        difficulty: "intermediate",
        materials: [
            "Heavy-duty aran cotton yarn (approx. 400 yards)",
            "5.0mm (H-8) crochet hook",
            "Stitch markers & yarn needle"
        ],
        abbreviations: "ch: chain | sc: single crochet | hdc: half double crochet | sl st: slip stitch",
        steps: [
            "Step 1 (The Base): Chain 35. Work hdc down the chain, place 3 hdc in the last stitch to turn the corner, and work back down the opposite side of the chain to form an oval base. Join with a sl st.",
            "Step 2 (The Body): Work in continuous rounds of hdc or a textured mesh stitch without increasing. This builds the tall, rectangular pouch structure of the bag.",
            "Step 3 (Sturdy Handles): In your final round, map out where you want the straps. Chain 50 over the designated handle spots, skipping 15 stitches on the body, then continue crocheting across.",
            "Step 4 (Reinforcement): Work 2-3 additional rounds of solid single crochet (sc) directly into and around the strap chains to ensure they don't stretch out under weight. Fasten off!"
        ]
    },

    bear: {
        title: " Pocket-Sized Amigurumi Bear",
        difficulty: "beginner-intermediate",
        materials: [
            "Worsted weight yarn in brown and cream",
            "3.5mm crochet hook",
            "8mm safety eyes & fiberfill stuffing"
        ],
        abbreviations: "mr: magic ring | sc: single crochet | inc: increase | dec: decrease",
        steps: [
            "Step 1 (Head & Body): Start with a magic ring of 6 sc. Increase evenly over 5 rounds to 30 stitches, work 4 rounds even, then decrease back down while firmly packing with stuffing to create a solid egg shape.",
            "Step 2 (Muzzle & Limbs): With cream yarn, crochet a tiny 12-stitch circle for the snout. Switch back to brown to create four tiny, matching thimble-like tubes for the paws and feet.",
            "Step 3 (The Ears): Work a magic ring of 6 sc, turn (don't join), and work 2 sc in each stitch to make two tiny semi-circles.",
            "Step 4 (Assembly): Embroider a tiny nose onto the muzzle. Securely sew the muzzle, ears, and limbs onto the main stuffed body using a sturdy whipstitch."
        ]
    },

    sunflower: {
        title: " Golden Summer Sunflower Applique",
        difficulty: "beginner",
        materials: [
            "Scraps of cotton yarn in Dark Brown and Bright Yellow",
            "4.0mm (G-6) crochet hook",
            "Yarn needle & scissors"
        ],
        abbreviations: "mr: magic ring | sc: single crochet | dc: double crochet | tr: treble crochet | sl st: slip stitch",
        steps: [
            "Step 1 (The Center): With dark brown yarn, work 10 sc into a magic ring. Join with a sl st. Round 2: Chain 1, work 2 sc in each stitch around to make a clean, flat brown disc (20 stitches). Fasten off brown.",
            "Step 2 (Attaching Gold): Join your bright yellow yarn into any stitch on the outer edge of your brown disc with a slip stitch.",
            "Step 3 (The Petals): *Chain 3, work [1 dc, 1 tr, ch 2, sl st into the top of the tr to form a point, 1 dc] all inside that same stitch. Chain 2, sl st into the next stitch.*",
            "Step 4 (Finishing up): Repeat the step 3 petal sequence all the way around your brown center until you have 10 brilliant petals. Sl st to close and weave in your ends!"
        ]
    },

    bucketHat: {
        title: " Structured 90s Bucket Hat",
        difficulty: "intermediate",
        materials: [
            "100% Cotton worsted weight yarn (great for structure)",
            "4.5mm or 5.0mm crochet hook",
            "Stitch marker to track continuous rounds"
        ],
        abbreviations: "mr: magic ring | sc: single crochet | inc: increase | blsc: back loop single crochet",
        steps: [
            "Step 1 (The Flat Crown): Start with 8 sc in a magic ring. Increase by 8 stitches every round until you have a perfectly flat circle that matches the diameter of the top of your head (approx. 6.5 inches).",
            "Step 2 (The Side Walls): Work 1 round of **back loop single crochet (blsc)**. This creates a sharp ridge line that forces the crochet to fold downward. Work 15-18 regular rounds even to build the sides.",
            "Step 3 (The Brim): To make the classic flared brim, work 1 round increasing in every 3rd stitch. Follow up with 4-5 rounds of standard sc without increases to grow the brim out.",
            "Step 4 (Edge Finish): Slip stitch loosely into every stitch along the outermost rim of the hat. This creates a crisp, sturdy edge that stops the brim from sagging into your eyes."
        ]
    },

    cushion: {
        title: "🛋️ Textured Boho Cushion Cover",
        difficulty: "intermediate",
        materials: [
            "Chunky or bulky weight yarn (approx. 500 yards)",
            "6.5mm (K-10.5) crochet hook",
            "16x16 inch pillow insert, 3 large wooden buttons"
        ],
        abbreviations: "ch: chain | sc: single crochet | dc: double crochet | sk: skip",
        steps: [
            "Step 1 (Front Panel): Chain 40. Work rows of a textured stitch (like alternating 1 sc and 1 dc across the row) until you have a perfect 16x16 inch square panel. Fasten off.",
            "Step 2 (Back Flap A): Chain 40. Work in solid single crochet for 10 inches. This forms the solid lower half of your envelope-style back closing.",
            "Step 3 (Back Flap B with Buttonholes): Chain 40. Work in sc for 8 inches. On the next row, create buttonholes by working: *sc 8, ch 2, skip 2 stitches*. Work 2 more rows of sc over this to finish the flap.",
            "Step 4 (Joining Panels): Layer your front panel down flat, then overlap Flap A and Flap B on top of it. Single crochet all the way around the outer perimeter through all overlapping layers to lock it together. Sew buttons onto Flap A to line up with your buttonholes!"
        ]
    }


};

function openPattern(type){

    const p = patterns[type];

    document.getElementById("patternModal").style.display = "flex";

    // Title
    document.getElementById("patternTitle").innerText = p.title;

    // Difficulty
    document.getElementById("patternDifficulty").innerText =
        "Difficulty: " + p.difficulty;

    // Materials
    const matList = document.getElementById("patternMaterials");
    matList.innerHTML = "";
    p.materials.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        matList.appendChild(li);
    });

    // Abbreviations
    document.getElementById("patternAbbr").innerText = p.abbreviations;

    // Steps
    const stepsDiv = document.getElementById("patternSteps");
    stepsDiv.innerHTML = "";

    p.steps.forEach((step, i) => {
        const div = document.createElement("div");
        div.className = "step";
        div.innerText = `${i + 1}. ${step}`;
        stepsDiv.appendChild(div);
    });
}

function closePattern(){
    document.getElementById("patternModal").style.display = "none";
}

document.querySelectorAll(".faq-item h3").forEach((item) => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle("show");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Add data arrays at the top of the file
    const brands = ["Denmax-ortho", "Bondent", "Mediair", "Denmax", "Apple-dent", "Orikam", "Gnatus", "Baolai", "Polodent", "3m", /* ...rest of brands... */];
    const procedures = ["Restoration Carvers", "Periodontics", "Composite Restoration", /* ...rest of procedures... */];
    const products = ["Nitrile Gloves", "Latex Gloves", "Dental Floss", /* ...rest of products... */];

    // Add additional branch arrays for Diagnostics Instrument
    const diagnosticTypeProducts = [
        "Blood bank instrument",
        "Glucometer Strip",
        "Glucometer",
        "ELISA plate",
        "Haemoglobin Meter",
        "POCT Analyser",
        "Urine Analyzer",
        "Monitor",
        "Electrode",
        "ELISA reader"
    ];
    const diagnosticSpecialities = [
        "Transfusion medicine",
        "Diagnostics",
        "POCT",
        "Biochemistry",
        "Histopathology",
        "Clinical Pathology",
        "Hematology",
        "General Hand Instruments and Hollowares",
        "Immunology"
    ];
    // Custom subcategories for Diagnostics
    const customDiagnosticsSubcategories = [
        { id: "instrument", name: "Instrument", description: "Explore Instruments" },
        { id: "biochemistry", name: "Biochemistry", description: "Explore Biochemistry" },
        { id: "rapidCard", name: "Rapid Card", description: "Explore Rapid Card" },
        { id: "phlebotomy", name: "Phlebotomy", description: "Explore Phlebotomy" },
        { id: "diagnosticTestKit", name: "Diagnostic Test Kit", description: "Explore Diagnostic Test Kit" },
        { id: "equipmentAccessories", name: "Equipment & Accessories", description: "Explore Equipment & Accessories" }
    ];

    // Add custom subcategories for Consumables
    const customConsumablesSubcategories = [
        { id: "medicalConsumables", name: "Medical Consumables", description: "Explore Medical Consumables" },
        { id: "surgicalConsumables", name: "Surgical Consumables", description: "Explore Surgical Consumables" },
        { id: "hygieneControl", name: "Hygiene Control", description: "Explore Hygiene Control" },
        { id: "bandagesWound", name: "Bandages & Wound", description: "Explore Bandages & Wound" }
    ];

    // Add arrays for Medical Consumables details
    const medicalConsumablesTypeProducts = [
        "Stethoscope",
        "Forceps",
        "Trolley",
        "Syringe with Needle",
        "Generic",
        "IV Cannula",
        "Temporary Restoratives",
        "Dental Alginate",
        "Lancet",
        "Mesh"
    ];
    const medicalConsumablesSpecialities = [
        "General Consumable and Disposables",
        "Respiratory Consumables",
        "Diagnostics",
        "Ophthalmology",
        "Prosthodontics",
        "Implantology",
        "Endodontics",
        "Hospital Furniture",
        "Conservative Dentistry"
    ];

    // Add custom subcategories for Equipment
    const customEquipmentSubcategories = [
        { id: "cardiology", name: "Cardiology", description: "Explore Cardiology" },
        { id: "ophthalmology", name: "Ophthalmology", description: "Explore Ophthalmology" },
        { id: "respiratory", name: "Respiratory", description: "Explore Respiratory" },
        { id: "diagnostics", name: "Diagnostics", description: "Explore Diagnostics" },
        { id: "generalSurgery", name: "General Surgery", description: "Explore General Surgery" },
        { id: "dermatology", name: "Dermatology", description: "Explore Dermatology" },
        { id: "hospitalUtilities", name: "Hospital Utilities", description: "Explore Hospital Utilities" },
        { id: "gynecologyObstetrics", name: "Gynecology & Obstetrics", description: "Explore Gynecology & Obstetrics" }
    ];

    // Add array for Equipment Respiratory Type Products
    const equipmentRespiratoryTypeProducts = [
        "Suction Machine",
        "Ventilator",
        "Fingertip Pulse Oximeter",
        "Nebulizer",
        "Compressor Nebulizer",
        "Spirometer",
        "BiPAP Machine",
        "Air Purifier",
        "BPAP Machine",
        "CPAP Machine"
    ];

    // Fetch the exact categories from the JSON file
    fetch('src/data/categories.json')
        .then(response => { 
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        })
        .then(categories => {
            categories.forEach(category => {
                if (category.name === "Diagnostics") {
                    // Override Diagnostics image with the new correct link
                    category.image = "https://etimg.etb2bimg.com/photo/112526425.cms";
                }
                if (category.name === "Consumables") {
                    category.image = "https://cdn-eplif.nitrocdn.com/wfvegrjPEPShEqEfUEqBAgAAxqbKSQLL/assets/images/optimized/rev-ffadd5f/wp-content/uploads/2022/10/Room-with-high-stock-levels-of-hospital-equipment.png";
                }
                if (category.name === "Equipment") {
                    category.image = "https://alliedusa.net/wp-content/uploads/2022/06/Tips-for-Choosing-Medical-Equipment-For-Your-Practice.jpg.webp";
                }
                if (category.name === "Ophthalmology") {
                    // Override Ophthalmology image with the provided link
                    category.image = "https://cdn.castleconnolly.com/dims4/default/fec3343/2147483647/strip/true/crop/1000x563+0+0/resize/840x473!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.us-east-1.amazonaws.com%2Fe0%2F4e%2Fca13f3ee428b9805eeef5aef9540%2Fpillar-opthamology-01-1200x675.jpg";
                }
                if (category.name === "Physiotherapy") {
                    // Override Physiotherapy image with the provided link
                    category.image = "https://regencyhealthcare.in/wp-content/uploads/2018/06/How-physiotherapy-can-help-with-pain-relief-and-better-mobility-1-1200x800.png";
                }
                if (category.name === "Nephrology") {
                    category.image = "https://www.omegahospitals.com/_next/image?url=https%3A%2F%2Fomegafilesstore.s3.ap-south-1.amazonaws.com%2Fwebsite%2Fspecializations%2Fnephrology.png&w=3840&q=75";
                }
                if (category.name === "Refurbished Devices") {
                    // Updated Refurbished image with new link
                    category.image = "https://meditechinsights.com/wp-content/uploads/2022/06/Refurbished-Medical-Equipment-Market-Website-New-e1655717061659.jpg";
                }
                if (category.name === "Dental") {
                    category.image = "https://www.dentistshorsham.co.uk/wp-content/uploads/2021/10/dental-health-care-blog.jpg.webp";
                    // Set only "Dental Equipments" as description
                    category.description = "Dental Equipments";
                }
                // ...existing forEach code...
            });
            // Define categories to remove from the heading navigation.
            const removeCats = ["Diagnostics", "Consumables", "Equipment", "Ophthalmology", "Nephrology", "Physiotherapy", "Refurbished Devices", "Dental"];
            
            const categoryNav = document.getElementById("category-nav");
            const categoryList = document.getElementById("category-list");

            // Clear any existing content
            categoryNav.innerHTML = '';
            categoryList.innerHTML = '';

            // Render navigation list items only for categories not in removeCats.
            categories.forEach(category => {
                // Override subcategories if needed (unchanged logic)
                if(category.name === "Diagnostics"){
                    category.subcategories = customDiagnosticsSubcategories;
                }
                if(category.name === "Consumables"){
                    category.subcategories = customConsumablesSubcategories;
                }
                if(category.name === "Equipment"){
                    category.subcategories = customEquipmentSubcategories;
                }

                // Render header navigation IF category is not in removeCats.
                if (!removeCats.includes(category.name)) {
                    const navItem = document.createElement("li");
                    navItem.textContent = category.name;
                    navItem.addEventListener("click", () => {
                        if (category.subcategories) {
                            showSubcategories(category);
                        } else {
                            window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
                        }
                    });
                    categoryNav.appendChild(navItem);
                }

                // Render category cards for all categories.
                const categoryCard = document.createElement("div");
                categoryCard.className = "category-card";
                categoryCard.innerHTML = `
                    <img src="${category.image}" alt="${category.name}">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    ${category.subcategories ? `<div class="subcategories-preview">View Options</div>` : ''}
                `;
                categoryCard.addEventListener("click", () => {
                    if (category.subcategories) {
                        showSubcategories(category);
                    } else {
                        window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
                    }
                });
                categoryList.appendChild(categoryCard);
            });
        })
        .catch(error => {
            console.error('Error loading categories:', error);
            document.getElementById("category-list").innerHTML = `
                <div class="error-message">
                    <h3>Sorry, we couldn’t load the categories</h3>
                    <p>Please try refreshing the page</p>
                </div>
            `;
        });

    function showSubcategories(category) {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Categories</a> > ${category.name}
            </div>
            <div class="subcategories-grid">
                ${category.subcategories.map(sub => `
                    <div class="subcategory-card" data-id="${sub.id}">
                        <h4>${sub.name}</h4>
                        <p>${sub.description}</p>
                    </div>
                `).join('')}
            </div>
        `;

        // Adjust click handlers for subcategories
        const subCards = categoriesSection.querySelectorAll('.subcategory-card');
        subCards.forEach(card => {
            card.addEventListener('click', () => {
                const selectedSub = card.querySelector('h4').textContent.trim();
                // If Diagnostics and subcategory is Instrument, render branch details
                if(category.name === "Diagnostics" && selectedSub === "Instrument"){
                    showDiagnosticInstrumentDetails();
                } else if(category.name === "Consumables" && selectedSub === "Medical Consumables"){
                    showMedicalConsumablesDetails();
                } else if(category.name === "Equipment" && selectedSub === "Respiratory"){
                    showEquipmentRespiratoryDetails();
                } else if(card.dataset.id === 'endodontics'){
                    showEndodonticsDetails();
                } else {
                    // For other subcategories, navigate directly (or implement additional logic)
                    window.location.href = `product.html?section=sub&item=${encodeURIComponent(selectedSub)}`;
                }
            });
        });

        // Back button handler
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }

    // New function to render Diagnostics → Instrument branches
    function showDiagnosticInstrumentDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Diagnostics</a> > Instrument
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${diagnosticTypeProducts.map(prod => {
                            const imageUrl = (() => {
                                if (prod === "Blood bank instrument") {
                                    return "https://mediwise.co.in/wp-content/uploads/2016/10/BCM-20.jpg";
                                } else if (prod === "Glucometer Strip") {
                                    return "https://b-arm.com/wp-content/uploads/2021/06/Untitled-design-23.png";
                                } else if (prod === "Glucometer") {
                                    return "https://m.media-amazon.com/images/I/61vQYB662CL._SL1500_.jpg";
                                } else if (prod === "ELISA plate") {
                                    return "https://www.bosterbio.com/media/magefan_blog/elisa_pipettes.jpg";
                                } else if (prod === "Haemoglobin Meter") {
                                    return "https://static1.industrybuying.com/products/lab-supplies/lab-necessities/lab-measuring-instrument/LAB.LAB.824157316_1704180837354.webp";
                                } else if (prod === "POCT Analyser") {
                                    return "https://cdnus.globalso.com/pushkangbio/28773568.png";
                                } else if (prod === "Urine Analyzer") {
                                    return "https://www.agappe.com/media/catalog/product/u/r/uriskan_plus_2000x.png?auto=webp&format=png&width=960&height=1200&fit=cover";
                                } else if (prod === "Monitor") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Monitor_%28medical%29.jpg/375px-Monitor_%28medical%29.jpg";
                                } else if (prod === "Electrode") {
                                    return "https://metalcutting.com/wp-content/uploads/2020/04/MCC-swiss-machining-of-medical-electrodes.png";
                                } else if (prod === "ELISA reader") {
                                    return "https://halomedicals.com/wp-content/uploads/2020/08/DAS-Elisa-Reader-570x570.jpg";
                                } else {
                                    return `https://via.placeholder.com/150?text=${encodeURIComponent(prod)}`;
                                }
                            })();
                            return `<li>
                                <a href="product.html?section=diagnostics-type&item=${encodeURIComponent(prod)}">
                                    <img src="${imageUrl}" alt="${prod}" class="diagnostic-img">
                                    <br>${prod}
                                </a>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>Explore by Specialities</h3>
                    <ul class="product-list">
                        ${diagnosticSpecialities.map(spec => {
                            const specImage = (() => {
                                if (spec === "Transfusion medicine") {
                                    return "https://www.lexiconin.com/wp-content/uploads/2023/01/image-30.png";
                                } else if (spec === "Diagnostics") {
                                    return "https://txhospitals.in/wp-content/uploads/2024/01/Molecular-Diagnostics.png";
                                } else if (spec === "POCT") {
                                    return "https://www.analis.com/web/image/541803-cdc3bd1a/DIRUI-POCT-URINE%20ANALYSIS-HC%20300.png?access_token=755d8867-fc39-4f80-b693-16ac765c1f78";
                                } else if (spec === "Biochemistry") {
                                    return "https://images.newscientist.com/wp-content/uploads/2019/10/22153920/biochemistry-shutterstock_187967735_web.jpg?width=900";
                                } else if (spec === "Histopathology") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/MI_with_contraction_bands_very_high_mag.jpg/960px-MI_with_contraction_bands_very_high_mag.jpg";
                                } else if (spec === "Clinical Pathology") {
                                    return "https://www.aprocarediagnostics.com/images/services/ClinicalPathalogy.jpg";
                                } else if (spec === "Hematology") {
                                    return "https://www.regionalcancercare.org/wp-content/uploads/elementor/thumbs/laboratory-technician-placing-patients-blood-sample-on-rack-with-other-test-tubes-qgrhxyrqgo2kn8n3bvhesvol7ktxm0ilyk7ihnh5fc.jpg";
                                } else if (spec === "General Hand Instruments and Hollowares") {
                                    return "https://www.colmed.in/pub/media/catalog/product/cache/0b053d6a941a972e37b88f9ddcceee64/b/p/bphandle.jpg";
                                } else if (spec === "Immunology") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MRSA%2C_Ingestion_by_Neutrophil.jpg/800px-MRSA%2C_Ingestion_by_Neutrophil.jpg";
                                } else {
                                    return `https://via.placeholder.com/150?text=${encodeURIComponent(spec)}`;
                                }
                            })();
                            return `<li>
                                <a href="product.html?section=diagnostics-specialities&item=${encodeURIComponent(spec)}">
                                    <img src="${specImage}" alt="${spec}" class="diagnostic-img">
                                    <br>${spec}
                                </a>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }

    function showEndodonticsDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Dental</a> > Endodontics
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>By Brands</h3>
                    <ul class="product-list">
                        ${brands.map(brand => `<li>
                            <a href="product.html?section=brands&item=${encodeURIComponent(brand)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(brand)}" alt="${brand}">
                                <br>${brand}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>By Procedure</h3>
                    <ul class="product-list">
                        ${procedures.map(proc => `<li>
                            <a href="product.html?section=procedures&item=${encodeURIComponent(proc)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(proc)}" alt="${proc}">
                                <br>${proc}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>By Products</h3>
                    <ul class="product-list">
                        ${products.map(product => `<li>
                            <a href="product.html?section=products&item=${encodeURIComponent(product)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(product)}" alt="${product}">
                                <br>${product}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            const dental = categories.find(c => c.id === "8");
            showSubcategories(dental);
        });
    }

    // New function to render Medical Consumables details
    function showMedicalConsumablesDetails() {
        const medicalConsumablesImages = {
            "Stethoscope": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Stethoscope_e4FmFEP.jpg?tr=w-150,q-60,f-avif",
            "Forceps": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/surgical-Hand-Instruments_toDYyvt.jpg?tr=w-150,q-60,f-avif",
            "Trolley": "https://static1.industrybuying.com/products/medical-supplies-equipment/hospital-furniture-equipments/hospital-trolley-buckets/MED.HOS.421708665_1695300213030.webp",
            "Syringe with Needle": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/image_UVd7B9q.png?tr=w-150,q-60,f-avif",
            "Generic": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/image_gJ8Eu79.png?tr=w-150,q-60,f-avif",
            "IV Cannula": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/IV_Cannula_0aQbDvk.jpg?tr=w-150,q-60,f-avif",
            "Temporary Restoratives": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/105.Temporary-Restoratives_WHfvLm2.png?tr=w-150,q-60,f-avif",
            "Dental Alginate": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/66.Dental-Alginate_oTfDgnK.png?tr=w-150,q-60,f-avif",
            "Lancet": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Lancet_vFbHoZN.jpg?tr=w-150,q-60,f-avif",
            "Mesh": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Mesh_di8FgYq.jpg?tr=w-150,q-60,f-avif"
        };
        const medicalConsumablesSpecialityImages = {
            "General Consumable and Disposables": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/General_Consumable_and_Disposables.jpg?tr=w-150,q-60,f-avif",
            "Respiratory Consumables": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Diagnostics_K7WGiYZ.jpg?tr=w-150,q-60,f-avif",
            "Diagnostics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Respiratory_Se3FjVS.jpg?tr=w-150,q-60,f-avif",
            "Ophthalmology": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/HospitalFurniture.jpg?tr=w-150,q-60,f-avif",
            "Prosthodontics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Ophthalmology_QhotdCG.jpg?tr=w-150,q-60,f-avif",
            "Implantology": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Frame_2.png?tr=w-150,q-60,f-avif",
            "Endodontics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Implantology.png?tr=w-150,q-60,f-avif",
            "Hospital Furniture": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Endodontics.png?tr=w-150,q-60,f-avif",
            "Conservative Dentistry": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Conservative_dentistry.png?tr=w-150,q-60,f-avif"
        };
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Consumables</a> > Medical Consumables
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${medicalConsumablesTypeProducts.map(prod => `<li>
                            <a href="product.html?section=consumables-type&item=${encodeURIComponent(prod)}">
                                <img src="${medicalConsumablesImages[prod]}" alt="${prod}" style="max-width:150px; height:auto;">
                                <br>${prod}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>Explore by Specialities</h3>
                    <ul class="product-list">
                        ${medicalConsumablesSpecialities.map(spec => `<li>
                            <a href="product.html?section=consumables-specialities&item=${encodeURIComponent(spec)}">
                                <img src="${medicalConsumablesSpecialityImages[spec] || `https://via.placeholder.com/150?text=${encodeURIComponent(spec)}`}" alt="${spec}" style="max-width:150px; height:auto;">
                                <br>${spec}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }

    // New function to render Equipment → Respiratory details
    function showEquipmentRespiratoryDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Equipment</a> > Respiratory
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${equipmentRespiratoryTypeProducts.map(prod => `<li>
                            <a href="product.html?section=equipment-respiratory&item=${encodeURIComponent(prod)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(prod)}" alt="${prod}">
                                <br>${prod}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = document.querySelector('.breadcrumb .back-link');
        backLink.addEventListener('click', (e) => {
             e.preventDefault();
             location.reload();
        });
    }

    // Example: Add event listeners for profile and cart buttons
    document.querySelector('.profile-icon').addEventListener('click', () => {
        alert('Profile button clicked!');
    });

    document.querySelector('.cart-icon').addEventListener('click', () => {
        alert('Cart button clicked!');
    });

    // At the end of the file, update event listeners for the new navbar links
    document.getElementById("home-link").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });

    // Toggle the "Products" dropdown instead of scrolling
    document.getElementById("products-link").addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = document.getElementById("products-dropdown");
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    });

    document.getElementById("pricing-link").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Pricing details coming soon!");
    });

    document.getElementById("contact-link").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Contact us at: info@example.com");
    });

    // Add logic to handle sticky header
    const header = document.querySelector('.main-nav');
    const sticky = header.offsetTop;

    function handleStickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
    }

    window.addEventListener('scroll', handleStickyHeader);

    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#f0a500';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    // Add logic to display product ratings and reviews
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const rating = document.createElement('div');
        rating.className = 'product-rating';
        rating.innerHTML = '★★★★☆';
        item.appendChild(rating);

        const reviews = document.createElement('div');
        reviews.className = 'product-reviews';
        reviews.innerHTML = '(20 reviews)';
        item.appendChild(reviews);
    });

    // Add logic to implement quick view option for products
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Quick view feature coming soon!');
        });
    });
});

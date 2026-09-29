document.addEventListener('DOMContentLoaded', () => {
    // Inputs & Selectors
    const categorySelect = document.getElementById('categorySelect');
    const certTypeSelect = document.getElementById('certTypeSelect');
    const achievementTypeSelect = document.getElementById('achievementTypeSelect');
    const themeSelect = document.getElementById('themeSelect');
    const institutionInput = document.getElementById('institutionInput');
    const eventTitleInput = document.getElementById('eventTitleInput');
    const durationSelect = document.getElementById('durationSelect');
    const modeSelect = document.getElementById('modeSelect');
    const courseDetailsGroup = document.getElementById('courseDetailsGroup');
    const courseMetaContainer = document.getElementById('courseMetaContainer');
    const eventDateInput = document.getElementById('eventDateInput');
    const issueDateInput = document.getElementById('issueDateInput');
    const certIdInput = document.getElementById('certIdInput');
    const studentNameInput = document.getElementById('studentNameInput');
    const headNameInput = document.getElementById('headNameInput');
    const headDesigInput = document.getElementById('headDesigInput');
    const principalNameInput = document.getElementById('principalNameInput');
    const principalDesigInput = document.getElementById('principalDesigInput');

    // Styling Controls
    const fontSelect = document.getElementById('fontSelect');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const fontColorPicker = document.getElementById('fontColorPicker');
    const watermarkOpacitySlider = document.getElementById('watermarkOpacitySlider');
    const ornamentToggle = document.getElementById('ornamentToggle');

    // Display Elements
    const certificate = document.getElementById('certificate');
    const dispCertSubtitle = document.getElementById('dispCertSubtitle');
    const dispInstitution = document.getElementById('dispInstitution');
    const curvedTextSvg = document.getElementById('curvedTextSvg');
    const dispEventTitle = document.getElementById('dispEventTitle');
    const dispDuration = document.getElementById('dispDuration');
    const dispMode = document.getElementById('dispMode');
    const dispCertId = document.getElementById('dispCertId');
    const dispEventDate = document.getElementById('dispEventDate');
    const dispIssueDate = document.getElementById('dispIssueDate');
    const certStudentName = document.getElementById('certStudentName');
    const certDescription = document.getElementById('certDescription');
    const dispHeadName = document.getElementById('dispHeadName');
    const dispHeadDesig = document.getElementById('dispHeadDesig');
    const dispPrincipalName = document.getElementById('dispPrincipalName');
    const dispPrincipalDesig = document.getElementById('dispPrincipalDesig');
    const watermarkLayer = document.getElementById('watermarkLayer');
    const ornaments = document.querySelectorAll('.corner-ornament');

    // Image Uploads
    const logoUpload = document.getElementById('logoUpload');
    const watermarkUpload = document.getElementById('watermarkUpload');
    const stampUpload = document.getElementById('stampUpload');
    const headSignUpload = document.getElementById('headSignUpload');
    const principalSignUpload = document.getElementById('principalSignUpload');
    const institutionLogo = document.getElementById('institutionLogo');
    const stampImg = document.getElementById('stampImg');
    const headSignImg = document.getElementById('headSignImg');
    const principalSignImg = document.getElementById('principalSignImg');

    // New Batch & History Elements
    const csvUpload = document.getElementById('csvUpload');
    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    const historyModal = document.getElementById('historyModal');
    const closeHistoryBtn = document.getElementById('closeHistoryBtn');
    const historyTableBody = document.getElementById('historyTableBody');

    // Options for Course vs Sports
    const courseOptions = [
        { value: "CERTIFICATE OF COURSE COMPLETION", text: "1. Course Completion" },
        { value: "CERTIFICATE OF TRAINING COMPLETION", text: "2. Training Completion" },
        { value: "CERTIFICATE OF WORKSHOP", text: "3. Workshop Participation" },
        { value: "CERTIFICATE OF SEMINAR", text: "4. Seminar Participation" },
        { value: "CERTIFICATE OF TECHNICAL WORKSHOP", text: "5. Technical Workshop" },
        { value: "CERTIFICATE OF CODING COMPETITION", text: "6. Coding Competition" },
        { value: "CERTIFICATE OF PROJECT COMPLETION", text: "7. Project Completion" },
        { value: "CERTIFICATE OF SKILL DEVELOPMENT", text: "8. Skill Development" },
        { value: "CERTIFICATE OF INTERNSHIP", text: "9. Internship Completion" },
        { value: "CERTIFICATE OF APPRECIATION", text: "10. Appreciation Award" }
    ];

    const sportOptions = [
        { value: "CERTIFICATE OF SPORTS WINNER", text: "🏆 1st Position / Gold Medal (Sports)" },
        { value: "CERTIFICATE OF SPORTS RUNNER", text: "🥈 2nd Position / Silver Medal (Sports)" },
        { value: "CERTIFICATE OF SPORTS THIRD", text: "🥉 3rd Position / Bronze Medal (Sports)" },
        { value: "CERTIFICATE OF SPORTS PARTICIPATION", text: "🏃‍♂️ Sports Meet Participation" },
        { value: "CERTIFICATE OF ATHLETIC EXCELLENCE", text: "🌟 Outstanding Athletic Performance" },
        { value: "CERTIFICATE OF INTER-COLLEGE SPORTS", text: "🏅 Inter-College Tournament Winner" }
    ];

    const achievementSentences = {
        "CERTIFICATE OF COURSE COMPLETION": "For successfully completing the [Course Name] with dedication, commitment, and demonstrated proficiency.",
        "CERTIFICATE OF TRAINING COMPLETION": "For successfully completing the [Training Program Name] and demonstrating commitment towards professional development.",
        "CERTIFICATE OF WORKSHOP": "For actively participating in the [Workshop Name] and demonstrating enthusiasm for learning and skill development.",
        "CERTIFICATE OF SEMINAR": "For actively participating in the [Seminar Name] and showing keen interest and enthusiasm towards learning.",
        "CERTIFICATE OF TECHNICAL WORKSHOP": "For successfully participating in the [Workshop Name] and demonstrating interest in developing technical skills.",
        "CERTIFICATE OF CODING COMPETITION": "For participating in the [Competition Name] and demonstrating creativity, problem-solving ability, and technical skills.",
        "CERTIFICATE OF PROJECT COMPLETION": "For successfully completing the [Project Name] with dedication, creativity, and commitment to excellence.",
        "CERTIFICATE OF SKILL DEVELOPMENT": "For successfully completing the [Program Name] and developing valuable skills through consistent learning and practice.",
        "CERTIFICATE OF INTERNSHIP": "For successfully completing the internship program at [Organization Name] with exemplary dedication and professional competence.",
        "CERTIFICATE OF APPRECIATION": "In appreciation of sincere efforts, active involvement, and valuable contribution towards the success of the [Event Name].",
        "CERTIFICATE OF SPORTS WINNER": "For securing First Position in the [Event Name] and displaying exceptional sportsmanship, speed, and athletic excellence.",
        "CERTIFICATE OF SPORTS RUNNER": "For securing Second Position in the [Event Name] and displaying remarkable determination and athletic skill.",
        "CERTIFICATE OF SPORTS THIRD": "For securing Third Position in the [Event Name] through commendable performance, stamina, and competitive spirit.",
        "CERTIFICATE OF SPORTS PARTICIPATION": "For actively participating in the [Event Name] Annual Sports Meet and demonstrating sportsmanship, energy, and enthusiasm.",
        "CERTIFICATE OF ATHLETIC EXCELLENCE": "For demonstrating outstanding athletic performance and remarkable dedication throughout the [Event Name].",
        "CERTIFICATE OF INTER-COLLEGE SPORTS": "For emerging as the Winner in the [Event Name] Inter-College Tournament through exceptional athletic prowess and teamwork."
    };

    function updateCategoryView() {
        const category = categorySelect.value;
        achievementTypeSelect.innerHTML = "";
        const optionsList = (category === 'sport') ? sportOptions : courseOptions;
        
        optionsList.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.value;
            el.textContent = opt.text;
            achievementTypeSelect.appendChild(el);
        });

        if (category === 'sport') {
            courseDetailsGroup.style.display = 'none';
            courseMetaContainer.style.display = 'none';
        } else {
            courseDetailsGroup.style.display = 'block';
            courseMetaContainer.style.display = 'block';
        }
        updateDynamicDescription();
    }

    function updateDynamicDescription() {
        const selectedType = achievementTypeSelect.value;
        dispCertSubtitle.textContent = selectedType.replace(/CERTIFICATE OF /g, '').replace(/_/g, ' ');
        let template = achievementSentences[selectedType] || "For successfully participating with dedication.";
        const eventName = eventTitleInput.value || "Program/Event";
        template = template.replace(/\[Event Name\]/g, eventName)
                           .replace(/\[Course Name\]/g, eventName)
                           .replace(/\[Training Program Name\]/g, eventName)
                           .replace(/\[Workshop Name\]/g, eventName)
                           .replace(/\[Seminar Name\]/g, eventName)
                           .replace(/\[Competition Name\]/g, eventName)
                           .replace(/\[Project Name\]/g, eventName)
                           .replace(/\[Program Name\]/g, eventName)
                           .replace(/\[Organization Name\]/g, institutionInput.value || "Organization");
        certDescription.textContent = template;
    }

    categorySelect.addEventListener('change', updateCategoryView);

    institutionInput.addEventListener('input', (e) => {
        dispInstitution.textContent = e.target.value;
        curvedTextSvg.textContent = e.target.value;
        updateDynamicDescription();
    });
    eventTitleInput.addEventListener('input', (e) => {
        dispEventTitle.textContent = e.target.value;
        updateDynamicDescription();
    });
    achievementTypeSelect.addEventListener('change', updateDynamicDescription);
    durationSelect.addEventListener('change', (e) => dispDuration.textContent = e.target.value);
    modeSelect.addEventListener('change', (e) => dispMode.textContent = e.target.value);

    function formatDate(dateStr) {
        if (!dateStr) return "";
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    eventDateInput.addEventListener('change', (e) => dispEventDate.textContent = formatDate(e.target.value));
    issueDateInput.addEventListener('change', (e) => dispIssueDate.textContent = formatDate(e.target.value));
    certIdInput.addEventListener('input', (e) => {
        dispCertId.textContent = e.target.value;
        updateQRCode(e.target.value);
    });
    studentNameInput.addEventListener('input', (e) => certStudentName.textContent = e.target.value);
    headNameInput.addEventListener('input', (e) => dispHeadName.textContent = e.target.value);
    headDesigInput.addEventListener('input', (e) => dispHeadDesig.textContent = e.target.value);
    principalNameInput.addEventListener('input', (e) => dispPrincipalName.textContent = e.target.value);
    principalDesigInput.addEventListener('input', (e) => dispPrincipalDesig.textContent = e.target.value);

    fontSelect.addEventListener('change', (e) => certStudentName.style.fontFamily = e.target.value);
    fontSizeSlider.addEventListener('input', (e) => certStudentName.style.fontSize = `${e.target.value}px`);
    fontColorPicker.addEventListener('input', (e) => certStudentName.style.color = e.target.value);
    certStudentName.style.fontFamily = fontSelect.value;
    certStudentName.style.fontSize = `${fontSizeSlider.value}px`;
    certStudentName.style.color = fontColorPicker.value;

    certTypeSelect.addEventListener('change', (e) => {
        certificate.className = certificate.className.replace(/\blayout-\S+/g, '');
        certificate.classList.add(e.target.value);
    });
    themeSelect.addEventListener('change', (e) => {
        certificate.className = certificate.className.replace(/\btheme-\S+/g, '');
        certificate.classList.add(e.target.value);
    });
    watermarkOpacitySlider.addEventListener('input', (e) => {
        watermarkLayer.style.opacity = e.target.value;
    });
    ornamentToggle.addEventListener('change', (e) => {
        ornaments.forEach(orn => {
            orn.style.display = e.target.checked ? 'block' : 'none';
        });
    });

    function updateQRCode(certId) {
        const qrContainer = document.getElementById('qrcode');
        qrContainer.innerHTML = "";
        const verifyUrl = `/verify/${(certId || "GITM-2026-CERT-9842").replace(/\//g, '-')}`;
        new QRCode(qrContainer, {
            text: verifyUrl,
            width: 60,
            height: 60,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
    updateQRCode(certIdInput.value);

    dispEventDate.textContent = formatDate(eventDateInput.value);
    dispIssueDate.textContent = formatDate(issueDateInput.value);
    dispDuration.textContent = durationSelect.value;
    dispMode.textContent = modeSelect.value;
    updateCategoryView();

    function setupImageUpload(inputEl, imgEl, isBg = false) {
        inputEl.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    if (isBg) {
                        watermarkLayer.style.backgroundImage = `url('${evt.target.result}')`;
                    } else {
                        imgEl.src = evt.target.result;
                        imgEl.classList.remove('hidden');
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    setupImageUpload(logoUpload, institutionLogo);
    setupImageUpload(watermarkUpload, null, true);
    setupImageUpload(stampUpload, stampImg);
    setupImageUpload(headSignUpload, headSignImg);
    setupImageUpload(principalSignUpload, principalSignImg);

    function validateInputs() {
        if (!studentNameInput.value.trim()) {
            alert("Please enter the Student Name!");
            studentNameInput.focus();
            return false;
        }
        if (!eventTitleInput.value.trim()) {
            alert("Please enter the Event / Course / Sport Name!");
            eventTitleInput.focus();
            return false;
        }
        if (!issueDateInput.value) {
            alert("Please select the Issue Date!");
            issueDateInput.focus();
            return false;
        }
        return true;
    }

    // ================= LOCAL STORAGE HISTORY LOGIC =================
    function saveCertificateToHistory(studentName, eventTitle, certId, issueDate) {
        const historyData = JSON.parse(localStorage.getItem('certificateHistory')) || [];
        const newRecord = {
            studentName,
            eventTitle,
            certId,
            issueDate: issueDate, // Raw date for loading back easily
            formattedDate: formatDate(issueDate) || issueDate,
            timestamp: new Date().toISOString()
        };
        historyData.push(newRecord);
        localStorage.setItem('certificateHistory', JSON.stringify(historyData));
    }

    // View History Button & Modal Handling
    viewHistoryBtn.addEventListener('click', () => {
        const historyData = JSON.parse(localStorage.getItem('certificateHistory')) || [];
        historyTableBody.innerHTML = "";
        
        // Also update table header if needed or keep it simple
        if (historyData.length === 0) {
            historyTableBody.innerHTML = `<tr><td colspan="5" style="padding:15px; text-align:center; color:#888;">No generated certificates found in local storage.</td></tr>`;
        } else {
            historyData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.style.borderBottom = "1px solid #333";
                row.innerHTML = `
                    <td style="padding:8px;">${item.studentName}</td>
                    <td style="padding:8px;">${item.eventTitle}</td>
                    <td style="padding:8px; color:#d4af37;">${item.certId}</td>
                    <td style="padding:8px;">${item.formattedDate || item.issueDate}</td>
                    <td style="padding:8px;"><button class="load-cert-btn btn btn-primary" data-index="${index}" style="padding:4px 10px; font-size:11px; cursor:pointer;">Load</button></td>
                `;
                historyTableBody.appendChild(row);
            });

            // Add event listeners to all Load buttons
            document.querySelectorAll('.load-cert-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.target.getAttribute('data-index');
                    const selectedRecord = historyData[idx];

                    // Populate inputs with selected student data
                    studentNameInput.value = selectedRecord.studentName;
                    certStudentName.textContent = selectedRecord.studentName;

                    if (selectedRecord.certId) {
                        certIdInput.value = selectedRecord.certId;
                        dispCertId.textContent = selectedRecord.certId;
                        updateQRCode(selectedRecord.certId);
                    }

                    if (selectedRecord.issueDate) {
                        issueDateInput.value = selectedRecord.issueDate;
                        dispIssueDate.textContent = formatDate(selectedRecord.issueDate);
                    }

                    // Close modal automatically after loading
                    historyModal.style.display = 'none';
                });
            });
        }
        historyModal.style.display = 'flex';
    });

    closeHistoryBtn.addEventListener('click', () => {
        historyModal.style.display = 'none';
    });

    // ================= CSV BATCH PROCESSING LOGIC =================
    csvUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            const text = evt.target.result;
            const lines = text.split('\n');
            let successCount = 0;

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                const cols = line.split(',');
                if (cols.length >= 1) {
                    const name = cols[0].trim();
                    const certId = cols[1] ? cols[1].trim() : `GITM/2026/BATCH-${Math.floor(Math.random()*1000)}` ;
                    const issueDate = cols[2] ? cols[2].trim() : new Date().toISOString().split('T')[0];

                    saveCertificateToHistory(name, eventTitleInput.value, certId, issueDate);
                    successCount++;
                }
            }
            alert(`Batch processed successfully! ${successCount} certificates logged to Local Storage history.`);
            csvUpload.value = "";
        };
        reader.readAsText(file);
    });

    // Download / Export triggers
    document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        if (!validateInputs()) return;
        saveCertificateToHistory(studentNameInput.value, eventTitleInput.value, certIdInput.value, issueDateInput.value);

        const { jsPDF } = window.jspdf;
        window.scrollTo(0, 0);
        html2canvas(certificate, { scale: 2, useCORS: true, logging: false }).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
            pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
            pdf.save(`${studentNameInput.value.replace(/\s+/g, '_')}_Certificate.pdf`);
        });
    });

    document.getElementById('downloadPngBtn').addEventListener('click', () => {
        if (!validateInputs()) return;
        saveCertificateToHistory(studentNameInput.value, eventTitleInput.value, certIdInput.value, issueDateInput.value);

        html2canvas(certificate, { scale: 2, useCORS: true, logging: false }).then((canvas) => {
            const link = document.createElement('a');
            link.download = `${studentNameInput.value.replace(/\s+/g, '_')}_Certificate.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    document.getElementById('printCertBtn').addEventListener('click', () => {
        if (!validateInputs()) return;
        saveCertificateToHistory(studentNameInput.value, eventTitleInput.value, certIdInput.value, issueDateInput.value);
        window.print();
    });

    document.getElementById('shareWhatsappBtn').addEventListener('click', () => {
        if (!validateInputs()) return;
        const student = studentNameInput.value;
        const eventName = eventTitleInput.value;
        const certId = certIdInput.value;
        const org = institutionInput.value;
        const message = `🎓 *Certificate of Achievement*\n\nCongratulations *${student}* for successfully completing/achieving in *${eventName}* from *${org}*!\n\nCertificate ID: ${certId}\nVerified by ${org}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
    });

    document.getElementById('shareEmailBtn'.trim()).addEventListener('click', () => {
        if (!validateInputs()) return;
        const student = studentNameInput.value;
        const eventName = eventTitleInput.value;
        const certId = certIdInput.value;
        const org = institutionInput.value;
        const subject = `Certificate Verification: ${eventName} - ${student}`;
        const body = `Dear ${student},\n\nCongratulations on your achievement!\n\nHere are your certificate details:\n- Organization: ${org}\n- Event/Course: ${eventName}\n- Certificate ID: ${certId}\n\nBest regards,\n${org} Team`;
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    });
});
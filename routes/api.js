const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Applicant = require('../models/appilcant'); 
const Interview = require('../models/interview'); 

router.post('/jobs', async (req, res) => {
    try {
        const { title, department, description } = req.body; 
        const job = new Job({ title, department, description });
        await job.save(); 
        res.status(201).json(job); 
    } catch (error) {
        res.status(500).json({ error: 'Error adding job' }); 
    }
});


router.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find(); 
        res.status(200).json(jobs); 
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving jobs' }); 
    }
});


router.post('/applicants', async (req, res) => {
    try {
        const { jobId, name, email, resumeLink } = req.body;
        const applicant = new Applicant({ jobId, name, email, resumeLink }); 
        await applicant.save(); 
        res.status(201).json(applicant); 
    } catch (error) {
        res.status(500).json({ error: 'Error adding applicant' }); 
    }
});

router.get('/applicants', async (req, res) => {
    try {
        const { jobId } = req.query; 
        const applicants = await Applicant.find({ jobId }); 
        // const applicants = await Applicant.find(); 
        res.status(200).json(applicants); 
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving applicants' }); 
    }
});


router.patch('/applicants/:applicantId', async (req, res) => {
    try {
        const { status } = req.body; 
        const applicant = await Applicant.findByIdAndUpdate(
            req.params.applicantId, 
            { status }, 
            { new: true } 
        );
        res.status(200).json(applicant); 
    } catch (error) {
        res.status(500).json({ error: 'Error updating applicant' }); 
    }
});


router.delete('/applicants/:applicantId', async (req, res) => {
    try {
        const applicant = await Applicant.findByIdAndDelete(req.params.applicantId); 
        res.status(204).json(applicant); 
    } catch (error) {
        res.status(500).json({ error: 'Error deleting applicant' }); 
    }
});

router.get('/interviews', async (req, res) => {
    try {
        const { applicantId } = req.query; 
        const interviews = await Interview.find({ applicantId }); 
        res.status(200).json(interviews);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving interviews' }); 
    }
});


router.post('/interviews', async (req, res) => {
    try {
        const { applicantId, interviewDate, interviewerName } = req.body; 
        const interview = new Interview({ applicantId, interviewDate, interviewerName }); 
        await interview.save(); 
        res.status(201).json(interview);
    } catch (error) {
        res.status(500).json({ error: 'Error scheduling interview' }); 
    }
});

module.exports = router; 

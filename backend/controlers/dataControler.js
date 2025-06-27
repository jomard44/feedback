
const express = require('express');
const Feedback = require('../module/feedbackSchema');

const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedbacks', error });
    }
}
const getFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedbacks = await Feedback.findById(id);
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedbacks', error });
    }
}
const postFeedback = async (req, res) => {
    try {
        const { title, comment, file } = req.body;
        
        const newFeedback = new Feedback({ title, comment, file});
        
       const baseURL = req.protocol + '://' + req.get('host');
        newFeedback.url = `${baseURL}/feedbacks/${newFeedback._id}`;
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error posting feedback', error });
    }
}
const updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error updating feedback', error });
    }
}
const deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFeedback = await Feedback.findByIdAndDelete(id);
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting feedback', error });
    }
}

module.exports = {
    getFeedbacks,
    getFeedback,
    postFeedback,
    updateFeedback,
    deleteFeedback
};  


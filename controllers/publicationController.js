
const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const Publication = require("../models/publication.js");

class Exchange {
    constructor() {

    }

    async createPublication(publication) {
        return Publication.create(publication);
    }


    async findAllActivePublications(page, limit, isArchived) {
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}


        if (endIndex < await Publication.countDocuments({isArchived: isArchived}).exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        results.count = await Publication.countDocuments({isArchived: isArchived}).exec();
        
        try {
            results.results = await Publication.find({ isArchived: isArchived }).sort({createdAt: -1}).limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
        return res.paginatedResults;
    }

    async findAllArchivedPublications(page, limit, isArchived) {
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}


        if (endIndex < await Publication.countDocuments({isArchived: isArchived}).exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        results.count = await Publication.countDocuments({isArchived: isArchived}).exec();
        
        try {
            results.results = await Publication.find({ isArchived: isArchived }).sort({archiveDate: -1}).limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
        return res.paginatedResults;
    }

    async updatePublication(body) {
        return Publication.findByIdAndUpdate(
            { _id: body.id },
            {
                title: body.title,
                author: body.author,
                content: body.content,
                description: body.description,
                isArchived: body.isArchived,
                date: body.date,
                archiveDate: body.archiveDate

            },
            { new: true, omitUndefined: true }
        )
    }

    async deletePublication(id) {
        return Publication.findByIdAndDelete(
            { _id: id },
        )
    }
}

let publicationController = new Exchange();
module.exports = publicationController;
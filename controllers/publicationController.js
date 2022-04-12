
const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const Publication = require("../models/publication.js");

class Exchange {
    constructor() {

    }

    async createPublication(publication) {
        return Publication.create(publication);
    }

    async findAllActivePublications() {
        return Publication.find({ isArchived: false });
    }

    // async findAllPublications(page, limit) {
    //     const startIndex = (page - 1) * limit
    //     const endIndex = page * limit
    //     const results = {}


    //     if (endIndex < await Publication.countDocuments().exec()) {
    //         results.next = {
    //             page: page + 1,
    //             limit: limit
    //         }
    //     }

    //     if (startIndex > 0) {
    //         results.previous = {
    //             page: page - 1,
    //             limit: limit
    //         }
    //     }
    //     results.count = await Publication.countDocuments().exec();
        
    //     try {
    //         results.results = await Publication.find().sort({_id: -1}).limit(limit).skip(startIndex).exec()
    //         res.paginatedResults = results
    //     } catch (e) {
    //         res.status(500).json({ message: e.message })
    //     }
    //     return res.paginatedResults;
    // }
    // async findByOrderId(id) {
    //     return Publication.findOne({ _id: id })
    // }
    // async findByType(type) {
    //     return Publication.find({ type: type })
    // }

    async showArchived() {
        return Publication.find({ isArchived: true })
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
                archivedDate: body.archiveDate

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
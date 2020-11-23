const router = require('express').Router();
const {
    getThoughtById,
    addThought,
    removeThought , 
    addReaction,
    removeReaction, 
    getThoughts,
    updateThought
  } = require('../../controllers/Thought-controller');


// /api/thoughts
router
.route('/')
.get(getThoughts)
.post(addThought);

// /api/thoughts/:id
router
.route("/:id")
.get(getThoughtById)
.put(updateThought);

// /api/Thoughts/<userId>
router
.route('/:userId')
.get(getThoughts)


// /api/Thoughts/<userId>/<ThoughtId>
router
.route('/:userId/:thoughtId')

.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;



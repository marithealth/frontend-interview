# Interview Evaluation Guide

## Overview

This exercise is designed to evaluate a candidate's debugging skills, problem-solving approach, and ability to work with modern development tools including AI assistants.

## Intentional Bugs & Challenges

### 1. Apollo Client Configuration Issue

**File:** `app/apollo-wrapper.tsx` (line 11) and `app/page.tsx` (line 45-53)
**Issue:** Apollo client points to localhost:4000 but server might not be running, plus useEffect race condition
**Expected Behavior:** Candidate should identify the server connection issue and fix the useEffect dependencies
**Evaluation Points:**

- Can they read error messages effectively?
- Do they understand Apollo Client error handling?
- How do they approach network errors?
- Can they identify and fix useEffect dependency issues?

### 2. Race Condition in useEffect

**File:** `app/page.tsx` (line 45-53)
**Issue:** useEffect has race condition and missing dependencies, causing state management issues
**Expected Behavior:** Candidate should identify the dependency issue and fix the race condition
**Evaluation Points:**

- Do they understand React hooks dependencies?
- Can they identify race conditions?
- How do they handle state management issues?

### 3. State Management Bug

**File:** `components/FilterBar.tsx` (line 20-25)
**Issue:** Local state not syncing with parent state
**Expected Behavior:** Candidate should fix the state synchronization
**Evaluation Points:**

- Can they debug state management issues?
- Do they understand React state flow?
- How do they test component behavior?

### 4. CSS Class Issue

**File:** `components/JobCard.tsx` (line 52-54)
**Issue:** Using `line-clamp-3` class that requires additional Tailwind plugin
**Expected Behavior:** Candidate should either add the plugin or use alternative styling
**Evaluation Points:**

- Do they notice styling issues?
- Can they identify missing CSS classes?
- How do they handle Tailwind configuration issues?

### 5. API Error Handling

**File:** `components/SalaryEstimator.tsx` (line 25-30)
**Issue:** API call to non-existent endpoint
**Expected Behavior:** Candidate should implement proper error handling
**Evaluation Points:**

- How do they handle API failures?
- Do they implement graceful degradation?
- Can they work with mock data?

### 6. Type Safety Issues

**File:** `components/JobCard.tsx` (line 8-12)
**Issue:** Potential runtime error with undefined salary
**Expected Behavior:** Candidate should add proper type guards
**Evaluation Points:**

- Do they understand TypeScript type safety?
- Can they identify potential runtime errors?
- How do they implement defensive programming?

## AI Tool Testing Scenarios

### Scenario 1: Code Generation

**Task:** Ask candidate to use AI to generate a new component
**Evaluation Points:**

- How do they prompt the AI effectively?
- Do they validate AI-generated code?
- Can they integrate AI suggestions properly?

### Scenario 2: Bug Fixing

**Task:** Ask candidate to use AI to help debug a specific issue
**Evaluation Points:**

- Do they provide good context to the AI?
- Can they evaluate AI suggestions critically?
- Do they test AI-provided solutions?

### Scenario 3: Code Review

**Task:** Ask candidate to use AI to review their code
**Evaluation Points:**

- Do they ask for specific types of feedback?
- Can they incorporate AI suggestions?
- Do they maintain code quality standards?

## Evaluation Rubric

### Problem-Solving Approach (25%)

- **Excellent:** Systematic debugging, clear methodology, asks good questions
- **Good:** Logical approach, some trial and error, asks clarifying questions
- **Fair:** Somewhat random approach, limited questioning
- **Poor:** No clear methodology, doesn't ask questions

### Technical Skills (25%)

- **Excellent:** Fixes all major bugs, understands all concepts
- **Good:** Fixes most bugs, understands most concepts
- **Fair:** Fixes some bugs, understands basic concepts
- **Poor:** Struggles with basic fixes, limited understanding

### AI Tool Usage (20%)

- **Excellent:** Effective prompting, critical evaluation, good integration
- **Good:** Decent prompting, some evaluation, reasonable integration
- **Fair:** Basic prompting, limited evaluation, poor integration
- **Poor:** Ineffective prompting, no evaluation, poor integration

### Code Quality (15%)

- **Excellent:** Clean, maintainable, well-structured code
- **Good:** Mostly clean, some good practices
- **Fair:** Basic quality, some issues
- **Poor:** Poor quality, many issues

### Communication (15%)

- **Excellent:** Clear explanations, good questions, collaborative
- **Good:** Mostly clear, some good questions
- **Fair:** Basic communication, limited questions
- **Poor:** Unclear communication, no questions

## Timing Guide

### Phase 1: Initial Assessment (10 minutes)

- 5 minutes: Explore codebase, run application
- 5 minutes: Document findings, identify issues

### Phase 2: Debugging Challenge (25 minutes)

- 10 minutes: Fix obvious issues (GraphQL, network errors)
- 10 minutes: Fix state management and component issues
- 5 minutes: Fix remaining issues

### Phase 3: AI Tool Integration (15 minutes)

- 5 minutes: Use AI to generate new component
- 5 minutes: Use AI to help debug remaining issues
- 5 minutes: Use AI to review code

### Phase 4: Enhancement (10 minutes)

- 10 minutes: Add small feature or improvement

## Questions to Ask

### During the Exercise

1. "What's your first impression of this codebase?"
2. "How would you approach debugging this issue?"
3. "What tools would you use to investigate this problem?"
4. "How do you typically work with AI coding assistants?"
5. "What would you do if the AI gives you incorrect code?"

### After the Exercise

1. "What was the most challenging part of this exercise?"
2. "How did you prioritize which issues to fix first?"
3. "What would you do differently if you had more time?"
4. "How do you typically validate AI-generated code?"
5. "What questions do you have about the codebase or requirements?"

## Red Flags to Watch For

- Doesn't read error messages carefully
- Makes changes without understanding the problem
- Doesn't test their fixes
- Relies too heavily on AI without validation
- Doesn't ask clarifying questions
- Poor communication about their process
- Doesn't understand basic React/Next.js concepts
- Makes changes that break other functionality

## Green Flags to Look For

- Reads error messages and console logs carefully
- Asks clarifying questions about requirements
- Tests their fixes thoroughly
- Uses AI tools effectively but critically
- Explains their thought process clearly
- Understands the bigger picture
- Considers edge cases and error handling
- Shows good debugging methodology

## Exercises

2. Fix the filters
   2a. Update the filter logic to actually filter
3. Hook up the Salary Estimator
4. Update the filters to search for states by abbr and full name
5. What would you change?

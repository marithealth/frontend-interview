# AI Tool Testing Scenarios

## Overview

These scenarios are designed to test how effectively the candidate can work with AI coding assistants like Cursor, GitHub Copilot, or ChatGPT.

## Scenario 1: Code Generation Challenge

**Time:** 5 minutes  
**Task:** Generate a new component using AI

### Instructions for Candidate

"Use your AI coding assistant to create a new component called `JobApplicationModal`. This component should:

- Be a modal that opens when clicking 'Apply Now' on a job card
- Include form fields for name, email, cover letter, and resume upload
- Have proper validation and error handling
- Use our existing design system (Tailwind classes)
- Be accessible and responsive"

### Evaluation Points

- **Prompting Quality:** Does the candidate provide clear, specific requirements?
- **Code Review:** Do they review and validate the AI-generated code?
- **Integration:** Can they integrate it properly with existing components?
- **Customization:** Do they modify the AI code to fit the project's needs?

### Expected AI Interaction

```typescript
// Candidate should ask AI something like:
"Create a React modal component for job applications with form validation, file upload, and Tailwind styling. Include TypeScript interfaces and accessibility features.";
```

## Scenario 2: Debugging Assistance

**Time:** 5 minutes  
**Task:** Use AI to help debug a specific issue

### Instructions for Candidate

"I notice the salary estimator isn't working properly. Use your AI assistant to help identify and fix the issue. The component should show salary estimates when you fill out the form, but it's not responding."

### Evaluation Points

- **Context Provision:** Does the candidate provide enough context to the AI?
- **Problem Identification:** Can they work with AI to identify the root cause?
- **Solution Validation:** Do they test and validate the AI's suggestions?
- **Critical Thinking:** Do they question AI suggestions that might be wrong?

### Expected AI Interaction

```typescript
// Candidate should provide context like:
"I have a React component with a salary estimator that's not working. The form has specialty, experience, and location fields, but when I submit it, nothing happens. The API call might be failing. Here's the component code: [paste code]";
```

## Scenario 3: Code Review and Optimization

**Time:** 5 minutes  
**Task:** Use AI to review and improve existing code

### Instructions for Candidate

"Use your AI assistant to review the `JobCard` component and suggest improvements. Focus on performance, accessibility, and code quality."

### Evaluation Points

- **Specific Requests:** Does the candidate ask for specific types of feedback?
- **Implementation:** Do they implement the AI's suggestions thoughtfully?
- **Quality Assessment:** Can they evaluate which suggestions are valuable?
- **Selective Adoption:** Do they adopt only the good suggestions?

### Expected AI Interaction

```typescript
// Candidate should ask something like:
"Please review this React component for performance issues, accessibility problems, and code quality improvements. Focus on React best practices and modern patterns: [paste JobCard code]";
```

## Scenario 4: Feature Implementation

**Time:** 5 minutes  
**Task:** Use AI to implement a specific feature

### Instructions for Candidate

"I'd like to add a 'Save Job' feature that allows users to bookmark jobs they're interested in. Use your AI assistant to help implement this functionality, including local storage and a saved jobs page."

### Evaluation Points

- **Architecture Thinking:** Does the candidate think about the overall architecture?
- **AI Collaboration:** How well do they work with AI to build complex features?
- **Testing:** Do they test the AI-generated code?
- **Integration:** Can they integrate the feature seamlessly?

## Scenario 5: Error Handling and Edge Cases

**Time:** 5 minutes  
**Task:** Use AI to improve error handling

### Instructions for Candidate

"The application currently doesn't handle errors gracefully. Use your AI assistant to help implement comprehensive error handling throughout the app, including network errors, validation errors, and edge cases."

### Evaluation Points

- **Comprehensive Thinking:** Does the candidate think about all types of errors?
- **AI Guidance:** How well do they use AI to identify potential issues?
- **Implementation:** Can they implement robust error handling?
- **User Experience:** Do they consider the user experience during errors?

## Evaluation Criteria for AI Tool Usage

### Excellent (4/4)

- Provides clear, specific prompts with good context
- Critically evaluates AI suggestions
- Tests and validates AI-generated code
- Integrates AI suggestions thoughtfully
- Asks follow-up questions to refine AI output
- Maintains code quality standards

### Good (3/4)

- Provides decent prompts with some context
- Reviews AI suggestions before implementing
- Tests most AI-generated code
- Integrates suggestions reasonably well
- Asks some clarifying questions

### Fair (2/4)

- Provides basic prompts with limited context
- Implements AI suggestions with minimal review
- Tests some AI-generated code
- Basic integration of suggestions
- Limited questioning of AI output

### Poor (1/4)

- Provides vague or unclear prompts
- Implements AI suggestions without review
- Doesn't test AI-generated code
- Poor integration of suggestions
- No critical evaluation of AI output

## Red Flags in AI Tool Usage

- Blindly accepts all AI suggestions
- Doesn't test AI-generated code
- Provides insufficient context to AI
- Doesn't understand what the AI generated
- Can't explain the AI-generated code
- Doesn't customize AI output for the project
- Relies too heavily on AI for basic tasks

## Green Flags in AI Tool Usage

- Asks AI for specific, targeted help
- Provides good context and examples
- Reviews and validates AI suggestions
- Customizes AI output for project needs
- Uses AI as a tool, not a crutch
- Can explain and modify AI-generated code
- Maintains code quality standards

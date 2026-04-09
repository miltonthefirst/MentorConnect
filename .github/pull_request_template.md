## Description

<!-- A clear, concise description of what this PR does. Use the conventional commit format as your title:  -->
<!-- e.g.  feat(mentee-portal): add mentor search filter -->

## Related Issue

Closes #<!-- issue number -->

## Type of Change

- [ ] `feat` — New feature
- [ ] `fix` — Bug fix
- [ ] `refactor` — Code refactor (no new feature or bug fix)
- [ ] `docs` — Documentation only
- [ ] `style` — Formatting / whitespace (no logic change)
- [ ] `chore` — Build, CI, or config change

## Which project(s) does this affect?

- [ ] `website`
- [ ] `mentee-portal`
- [ ] `mentor-portal`
- [ ] `admin-portal`
- [ ] `auth` library
- [ ] `data-access` library
- [ ] `ui` library
- [ ] `utils` library
- [ ] `discovery` library

## Screenshots / Screen Recording

<!-- Required if this PR changes any UI. Drag and drop images or GIFs below. -->
<!-- Delete this section if not applicable. -->

| Before | After |
|--------|-------|
|        |       |

## Self-Review Checklist

<!-- Go through each item before requesting review. -->

- [ ] I have run `npm run format` and there are no formatting issues
- [ ] I have run `npm run test:<project>` and all tests pass
- [ ] I have removed all `console.log`s and commented-out code
- [ ] Components use `ChangeDetectionStrategy.OnPush`
- [ ] No `firebase` imports in UI components (only in services inside `data-access`)
- [ ] I have not introduced any `any` types
- [ ] The PR title follows conventional commit format (`type(scope): description`)

## Notes for Reviewers

<!-- Anything the reviewers should pay special attention to, or context that isn't obvious from the code. -->

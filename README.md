# Madera Rescue Mission

Next.js 16, React 19, TypeScript, Tailwind CSS 4
Deployed on Vercel: https://maderarescuemission.vercel.app
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/maderarescuemission/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarescuemission/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarescuemission/agents/marketing-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarescuemission/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarescuemission/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

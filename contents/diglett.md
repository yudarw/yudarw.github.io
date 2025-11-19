# Overview

Diglett is an automated CPK (Process Capability Index) analysis tool designed to streamline the quality analysis process in production environments. The tool retrieves test data from production databases and automatically calculates the CPK values for test items in specific test stations.

![Diglett Application Screenshot](../docs/images/diglett-main-ui.JPG)

## Problem Statement

Engineers across multiple factories (Batam, Taipei, and Vietnam) needed to manually extract test data and perform CPK calculations, which was time-consuming and prone to errors. The manual process involved:

- Extracting data from multiple production databases
- Manual data cleaning and preparation
- Complex CPK calculations using spreadsheets
- Generating reports for stakeholders
- Inconsistent analysis methods across different teams

## Solution

I developed Diglett as a comprehensive automated solution that:

- **Automated Data Retrieval:** Direct connection to production databases with optimized queries
- **Real-time Analysis:** Instant CPK calculations with statistical process control
- **Multi-factory Support:** Unified tool used across Batam, Taipei, and Vietnam facilities
- **Visual Reports:** Interactive charts and graphs for easy interpretation
- **Export Capabilities:** Generate professional reports in PDF and Excel formats

## Technical Implementation

The application was built using modern .NET technologies with a focus on performance and reliability:

### Architecture

- **Frontend:** WPF (Windows Presentation Foundation) for rich user interface
- **Backend:** C# .NET with LINQ for data processing
- **Database:** MySQL with optimized stored procedures
- **Data Layer:** Entity Framework Core for ORM

### Key Features

- Multi-threaded data processing for large datasets
- Caching mechanism to reduce database load
- Configurable statistical parameters (Cp, Cpk, Pp, Ppk)
- Historical trend analysis
- Automated alerting for out-of-spec conditions
- User authentication and role-based access control

## Results & Impact

| Metric | Value | Description |
|--------|-------|-------------|
| Time Reduction | 70% | Reduced analysis time from 2 hours to 30 minutes |
| Factories | 3 | Used across Batam, Taipei, and Vietnam |
| Active Users | 50+ | Cross-department engineers using daily |
| Accuracy | 95% | Improved data accuracy and consistency |

## Challenges & Solutions

### Database Performance

**Challenge:** Large datasets (millions of records) causing slow query performance.

**Solution:** Implemented database indexing, query optimization, and data pagination to handle large volumes efficiently.

### Cross-Factory Compatibility

**Challenge:** Different database schemas and test configurations across factories.

**Solution:** Created a flexible configuration system that allows customization per factory while maintaining core functionality.

### User Training

**Challenge:** Engineers unfamiliar with the new tool and statistical concepts.

**Solution:** Developed comprehensive documentation and conducted training sessions. Built an intuitive UI with tooltips and help guides.

## Future Enhancements

- Machine learning integration for predictive quality analysis
- Web-based version for mobile access
- Integration with other production monitoring systems
- Advanced visualization with dashboard capabilities
- Real-time monitoring and alerting system

## Technologies Used

`C#` ``.NET Framework`` ``WPF`` ``MySQL`` ``Entity Framework`` ``LINQ`` ``Statistical Analysis`` ``Data Visualization``

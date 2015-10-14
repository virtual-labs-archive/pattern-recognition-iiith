package MyPackage;

import Jama.EigenvalueDecomposition;
import Jama.Matrix;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Shape;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.AffineTransform;
import java.awt.geom.Ellipse2D;
import java.awt.geom.Ellipse2D.Double.*;
import java.awt.geom.Line2D;
import java.awt.geom.Line2D.Double.*;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.util.Hashtable;
import java.util.Random;

import javax.swing.BorderFactory;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.GroupLayout.ParallelGroup;
import javax.swing.GroupLayout.SequentialGroup;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSlider;
import javax.swing.JTextField;
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.annotations.XYShapeAnnotation;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.Range;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment5
  extends JApplet
{
  private JComboBox class1_select;
  private JButton clear_button;
  private JPanel controls;
  private JButton generate_mean;
  private JPanel graph;
  private JLabel jLabel10;
  private JLabel jLabel5;
  private JLabel jLabel7;
  private JLabel jLabel8;
  private JLabel jLabel9;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JButton load_class1;
  private JTextField m1_3;
  private JTextField m1_4;
  private JTextField m2_3;
  private JTextField m2_4;
  private JToggleButton mark;
  private JButton markAll;
  private JPanel mark_points;
  private JSlider prior;
  private JButton reset_axes;
  private JTextField s11_3;
  private JTextField s11_4;
  private JTextField s12_3;
  private JTextField s12_4;
  private JTextField s21_3;
  private JTextField s21_4;
  private JTextField s22_3;
  private JTextField s22_4;
  private Chart1 chart;
  private ChartPanel innerGraph;
  private XYSeries series1;
  private XYSeries series2;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment5.this.initComponents();
          Experiment5.this.initGraph();
          for (String d : Experiment5.this.datasets) {
            Experiment5.this.class1_select.addItem(d);
          }
        }
      });
    }
    catch (Exception ex)
    {
      ex.printStackTrace();
    }
  }
  
  public void initGraph()
  {
    XYSeriesCollection x1 = new XYSeriesCollection();
    this.series1 = new XYSeries("Class 1");
    this.series2 = new XYSeries("Class 2");
    x1.addSeries(this.series1);
    x1.addSeries(this.series2);
    this.chart = new Chart1(x1, "Y-axis", "X-axis");
    
    this.innerGraph = new ChartPanel(this.chart);
    this.innerGraph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment5.this.innerGraph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment5.this.innerGraph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment5.this.chart.getPlot();
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        double p1 = Experiment5.this.prob1(chartY, chartX);
        double p2 = Experiment5.this.prob2(chartY, chartX);
        if (Experiment5.this.mark.isSelected()) {
          if (p1 > p2) {
            Experiment5.this.series1.add(chartX, chartY);
          } else {
            Experiment5.this.series2.add(chartX, chartY);
          }
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.graph.add(this.innerGraph);
  }
  
  public static void main(String[] args)
  {
    Experiment5 applet = new Experiment5();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 5 - Bayesian Classification");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(900, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  private void initComponents()
  {
    this.graph = new JPanel();
    this.controls = new JPanel();
    this.mark_points = new JPanel();
    this.mark = new JToggleButton();
    this.clear_button = new JButton();
    this.markAll = new JButton();
    this.prior = new JSlider();
    this.jPanel1 = new JPanel();
    this.jLabel5 = new JLabel();
    this.class1_select = new JComboBox();
    this.load_class1 = new JButton();
    this.jPanel2 = new JPanel();
    this.jLabel7 = new JLabel();
    this.jLabel8 = new JLabel();
    this.m1_3 = new JTextField();
    this.m2_3 = new JTextField();
    this.m1_4 = new JTextField();
    this.m2_4 = new JTextField();
    this.s12_4 = new JTextField();
    this.s11_4 = new JTextField();
    this.s12_3 = new JTextField();
    this.s11_3 = new JTextField();
    this.jLabel9 = new JLabel();
    this.jLabel10 = new JLabel();
    this.generate_mean = new JButton();
    this.s21_3 = new JTextField();
    this.s22_3 = new JTextField();
    this.s21_4 = new JTextField();
    this.s22_4 = new JTextField();
    this.reset_axes = new JButton();
    
    this.graph.setMinimumSize(new Dimension(400, 400));
    this.graph.setPreferredSize(new Dimension(600, 600));
    this.graph.setLayout(new GridLayout(1, 0));
    getContentPane().add(this.graph, "Center");
    
    this.controls.setPreferredSize(new Dimension(400, 600));
    
    this.mark_points.setBorder(BorderFactory.createTitledBorder("Mark Points"));
    this.mark_points.setPreferredSize(new Dimension(218, 68));
    
    this.mark.setText("Mark");
    this.mark.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.markActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.clear_buttonActionPerformed(evt);
      }
    });
    this.markAll.setText("Mark All");
    this.markAll.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.markAllActionPerformed(evt);
      }
    });
    this.prior.setMajorTickSpacing(10);
    this.prior.setPaintLabels(true);
    this.prior.setPaintTicks(true);
    Hashtable labelTable = new Hashtable();
    labelTable.put(new Integer(0), new JLabel("Class 1"));
    labelTable.put(new Integer(100), new JLabel("Class 2"));
    this.prior.setLabelTable(labelTable);
    
    GroupLayout mark_pointsLayout = new GroupLayout(this.mark_points);
    this.mark_points.setLayout(mark_pointsLayout);
    mark_pointsLayout.setHorizontalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addContainerGap().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addComponent(this.mark).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.markAll).addGap(7, 7, 7).addComponent(this.clear_button).addContainerGap(138, 32767)).addGroup(mark_pointsLayout.createSequentialGroup().addComponent(this.prior, -1, 234, 32767).addGap(87, 87, 87)))));
    
    mark_pointsLayout.setVerticalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, mark_pointsLayout.createSequentialGroup().addContainerGap(-1, 32767).addComponent(this.prior, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.mark).addComponent(this.clear_button).addComponent(this.markAll)).addContainerGap()));
    
    this.jPanel1.setBorder(BorderFactory.createTitledBorder("Load Custom Datasets"));
    
    this.jLabel5.setText("Dataset");
    
    this.load_class1.setText("Load");
    this.load_class1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.load_class1ActionPerformed(evt);
      }
    });
    GroupLayout jPanel1Layout = new GroupLayout(this.jPanel1);
    this.jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addContainerGap().addComponent(this.jLabel5).addGap(18, 18, 18).addComponent(this.class1_select, -2, 143, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.load_class1, -1, 87, 32767).addContainerGap()));
    
    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel5).addComponent(this.class1_select, -2, -1, -2).addComponent(this.load_class1)).addContainerGap(-1, 32767)));
    
    this.jPanel2.setBorder(BorderFactory.createTitledBorder("Generate Random Values"));
    
    this.jLabel7.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel7.setText("Class 1");
    
    this.jLabel8.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel8.setText("Class 2");
    
    this.m1_3.setText("0");
    
    this.m2_3.setText("0");
    
    this.m1_4.setText("0");
    
    this.m2_4.setText("0");
    
    this.s12_4.setText("0");
    
    this.s11_4.setText("1");
    
    this.s12_3.setText("0");
    
    this.s11_3.setText("1");
    
    this.jLabel9.setText("Mean");
    
    this.jLabel10.setText("Co-Variance");
    
    this.generate_mean.setText("Generate");
    this.generate_mean.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.generate_meanActionPerformed(evt);
      }
    });
    this.s21_3.setText("0");
    
    this.s22_3.setText("1");
    
    this.s21_4.setText("0");
    
    this.s22_4.setText("1");
    
    GroupLayout jPanel2Layout = new GroupLayout(this.jPanel2);
    this.jPanel2.setLayout(jPanel2Layout);
    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGap(115, 115, 115).addComponent(this.jLabel7).addGap(18, 18, 18).addComponent(this.jLabel8)).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel10).addComponent(this.generate_mean).addGroup(jPanel2Layout.createSequentialGroup().addGap(34, 34, 34).addComponent(this.jLabel9))).addGap(18, 18, 18).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s21_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_3, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s11_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_3, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.m1_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_3, -2, 40, -2))).addGap(18, 18, 18).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.m1_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_4, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s21_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_4, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s11_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_4, -2, 40, -2))))).addContainerGap(28, 32767)));
    
    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel7).addComponent(this.jLabel8)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel9).addComponent(this.m1_3, -2, -1, -2).addComponent(this.m2_3, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel10).addComponent(this.s11_3, -2, -1, -2).addComponent(this.s12_3, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_3, -2, -1, -2).addComponent(this.s22_3, -2, -1, -2).addComponent(this.generate_mean))).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.m1_4, -2, -1, -2).addComponent(this.m2_4, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s11_4, -2, -1, -2).addComponent(this.s12_4, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_4, -2, -1, -2).addComponent(this.s22_4, -2, -1, -2)))).addContainerGap(-1, 32767)));
    
    this.reset_axes.setText("Resize Axes");
    this.reset_axes.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment5.this.reset_axesActionPerformed(evt);
      }
    });
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jPanel1, -1, -1, 32767).addComponent(this.mark_points, -1, 345, 32767).addComponent(this.jPanel2, -1, -1, 32767)).addGap(43, 43, 43)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.reset_axes).addContainerGap(295, 32767)))));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, controlsLayout.createSequentialGroup().addGap(29, 29, 29).addComponent(this.jPanel1, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.mark_points, -2, 116, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.jPanel2, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.reset_axes).addGap(366, 366, 366)));
    
    getContentPane().add(this.controls, "East");
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    
    this.series1.clear();
    this.series2.clear();
    
    this.mark.setSelected(false);
  }
  
  private void markActionPerformed(ActionEvent evt)
  {
    if (this.mark.isSelected())
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(false);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(false);
    }
    else
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(true);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(true);
    }
  }
  
  private void load_class1ActionPerformed(ActionEvent evt)
  {
    this.series1.clear();
    this.series2.clear();
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.clearAnnotations();
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(this.path + this.class1_select.getSelectedItem());
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        int i = 0;
        
        String str = buf.readLine();
        String[] val = str.split(" ");
        this.m1_3.setText(val[0]);
        this.m2_3.setText(val[1]);
        str = buf.readLine();
        val = str.split(" ");
        this.s11_3.setText(val[0]);
        this.s12_3.setText(val[1]);
        str = buf.readLine();
        val = str.split(" ");
        this.s21_3.setText(val[0]);
        this.s22_3.setText(val[1]);
        str = buf.readLine();
        val = str.split(" ");
        this.m1_4.setText(val[0]);
        this.m2_4.setText(val[1]);
        str = buf.readLine();
        val = str.split(" ");
        this.s11_4.setText(val[0]);
        this.s12_4.setText(val[1]);
        str = buf.readLine();
        val = str.split(" ");
        this.s21_4.setText(val[0]);
        this.s22_4.setText(val[1]);
        this.prior.setValue((int)(Double.parseDouble(buf.readLine()) * 100.0D));
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
    generate_meanActionPerformed(evt);
  }
  
  private void generate_meanActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.clearAnnotations();
    BasicStroke bs = new BasicStroke(1.0F);
    
    this.series1.clear();
    Random g1_1 = new Random();
    Random g2_1 = new Random();
    this.m1_val1 = Double.parseDouble(this.m1_3.getText());
    this.m2_val1 = Double.parseDouble(this.m2_3.getText());
    this.s11_val1 = Double.parseDouble(this.s11_3.getText());
    this.s12_val1 = Double.parseDouble(this.s12_3.getText());
    this.s21_val1 = Double.parseDouble(this.s21_3.getText());
    this.s22_val1 = Double.parseDouble(this.s22_3.getText());
    double[][] arr1 = { { this.s11_val1, this.s12_val1 }, { this.s21_val1, this.s22_val1 } };
    this.m1 = new Matrix(arr1);
    EigenvalueDecomposition evd1 = new EigenvalueDecomposition(this.m1);
    double[] e_1 = evd1.getRealEigenvalues();
    Matrix V1 = evd1.getV().transpose();
    Matrix D1 = evd1.getD();
    double e1 = e_1[1];
    double e2 = e_1[0];
    int id = e1 > e2 ? 1 : 0;
    Line2D l1 = new Line2D.Double(this.m2_val1 - e1 / 2.0D, this.m1_val1, this.m2_val1 + e1 / 2.0D, this.m1_val1);
    Line2D l2 = new Line2D.Double(this.m2_val1, this.m1_val1 - e2 / 2.0D, this.m2_val1, this.m1_val1 + e2 / 2.0D);
    Ellipse2D ell1 = new Ellipse2D.Double(this.m2_val1 - e1 / 2.0D, this.m1_val1 - e2 / 2.0D, e1, e2);
    AffineTransform at = AffineTransform.getRotateInstance(Math.atan2(V1.get(id, 0), V1.get(id, 1)), this.m2_val1, this.m1_val1);
    XYShapeAnnotation a1 = new XYShapeAnnotation(at.createTransformedShape(l1), bs, Color.red);
    XYShapeAnnotation a2 = new XYShapeAnnotation(at.createTransformedShape(l2), bs, Color.red);
    XYShapeAnnotation ea1 = new XYShapeAnnotation(at.createTransformedShape(ell1), bs, Color.red);
    
    plot.addAnnotation(a1);
    plot.addAnnotation(a2);
    plot.addAnnotation(ea1);
    
    this.series2.clear();
    Random g1_2 = new Random();
    Random g2_2 = new Random();
    this.m1_val2 = Double.parseDouble(this.m1_4.getText());
    this.m2_val2 = Double.parseDouble(this.m2_4.getText());
    this.s11_val2 = Double.parseDouble(this.s11_4.getText());
    this.s12_val2 = Double.parseDouble(this.s12_4.getText());
    this.s21_val2 = Double.parseDouble(this.s21_4.getText());
    this.s22_val2 = Double.parseDouble(this.s22_4.getText());
    double[][] arr2 = { { this.s11_val2, this.s12_val2 }, { this.s21_val2, this.s22_val2 } };
    this.m2 = new Matrix(arr2);
    EigenvalueDecomposition evd2 = new EigenvalueDecomposition(this.m2);
    Matrix V2 = evd2.getV().transpose();
    Matrix D2 = evd2.getD();
    double[] e_2 = evd2.getRealEigenvalues();
    e1 = e_2[1];
    e2 = e_2[0];
    id = e1 > e2 ? 1 : 0;
    Line2D l3 = new Line2D.Double(this.m2_val2 - e1 / 2.0D, this.m1_val2, this.m2_val2 + e1 / 2.0D, this.m1_val2);
    Line2D l4 = new Line2D.Double(this.m2_val2, this.m1_val2 - e2 / 2.0D, this.m2_val2, this.m1_val2 + e2 / 2.0D);
    Ellipse2D ell2 = new Ellipse2D.Double(this.m2_val2 - e1 / 2.0D, this.m1_val2 - e2 / 2.0D, e1, e2);
    AffineTransform at2 = AffineTransform.getRotateInstance(Math.atan2(V2.get(id, 0), V2.get(id, 1)), this.m2_val2, this.m1_val2);
    XYShapeAnnotation a3 = new XYShapeAnnotation(at2.createTransformedShape(l3), bs, Color.blue);
    XYShapeAnnotation a4 = new XYShapeAnnotation(at2.createTransformedShape(l4), bs, Color.blue);
    XYShapeAnnotation ea2 = new XYShapeAnnotation(at2.createTransformedShape(ell2), bs, Color.blue);
    
    plot.addAnnotation(a3);
    plot.addAnnotation(a4);
    plot.addAnnotation(ea2);
    Rectangle2D r_1 = at.createTransformedShape(ell1).getBounds2D();
    double la = r_1.getMinX() < r_1.getMinY() ? r_1.getMinX() : r_1.getMinY();
    double ra = r_1.getMaxX() > r_1.getMaxY() ? r_1.getMaxX() : r_1.getMaxY();
    Rectangle2D r_2 = at2.createTransformedShape(ell2).getBounds2D();
    double lb = r_2.getMinX() < r_2.getMinY() ? r_2.getMinX() : r_2.getMinY();
    double rb = r_2.getMaxX() > r_2.getMaxY() ? r_2.getMaxX() : r_2.getMaxY();
    double l = la < lb ? la : lb;
    double r = ra > rb ? ra : rb;
    plot.getDomainAxis().setRange(l, r);
    plot.getRangeAxis().setRange(l, r);
    plot.zoom(0.5D);
  }
  
  private void reset_axesActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.getDomainAxis().setAutoRange(true);
    plot.getRangeAxis().setAutoRange(true);
    double r1 = plot.getRangeAxis().getLowerBound();
    double r2 = plot.getDomainAxis().getLowerBound();
    double l1 = plot.getRangeAxis().getUpperBound();
    double l2 = plot.getDomainAxis().getUpperBound();
    double r = r1 < r2 ? r1 : r2;
    double l = l1 > l2 ? l1 : l2;
    plot.getRangeAxis().setRange(r, l);
    plot.getDomainAxis().setRange(r, l);
  }
  
  private void markAllActionPerformed(ActionEvent evt)
  {
    this.series1.clear();
    this.series2.clear();
    XYPlot plot = (XYPlot)this.chart.getPlot();
    double l = plot.getRangeAxis().getRange().getLowerBound();
    double r = plot.getRangeAxis().getRange().getUpperBound();
    for (double i = l; i < r; i += (r - l) / 100.0D) {
      for (double j = l; j < r; j += (r - l) / 100.0D)
      {
        double p1 = (100 - this.prior.getValue()) / 100.0D * prob1(j, i);
        double p2 = this.prior.getValue() / 100.0D * prob2(j, i);
        if (p1 > p2) {
          this.series1.add(i, j);
        } else {
          this.series2.add(i, j);
        }
      }
    }
  }
  
  private DecimalFormat df = new DecimalFormat("###.##");
  private String[] datasets = { "T1", "T2", "T3", "T4" };
  private String path = "/Data/";
  private double m1_val1;
  private double m2_val1;
  private double s11_val1;
  private double s12_val1;
  private double s21_val1;
  private double s22_val1;
  private double m1_val2;
  private double m2_val2;
  private double s11_val2;
  private double s12_val2;
  private double s21_val2;
  private double s22_val2;
  private Matrix m1;
  private Matrix m2;
  
  private double eigen1(double a, double b, double d)
  {
    double e1 = Math.abs((a + d) / 2.0D + Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    double e2 = Math.abs((a + d) / 2.0D - Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    return e1 > e2 ? e1 : e2;
  }
  
  private double eigen2(double a, double b, double d)
  {
    double e1 = Math.abs((a + d) / 2.0D + Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    double e2 = Math.abs((a + d) / 2.0D - Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    return e1 < e2 ? e1 : e2;
  }
  
  private double prob1(double x, double y)
  {
    double[][] arr = { { x - this.m1_val1 }, { y - this.m2_val1 } };
    Matrix mean = new Matrix(arr);
    return Math.exp(-0.5D * mean.transpose().times(this.m1.inverse()).times(mean).det()) / Math.sqrt(this.m1.det());
  }
  
  private double prob2(double x, double y)
  {
    double[][] arr = { { x - this.m1_val2 }, { y - this.m2_val2 } };
    Matrix mean = new Matrix(arr);
    return Math.exp(-0.5D * mean.transpose().times(this.m2.inverse()).times(mean).det()) / Math.sqrt(this.m2.det());
  }
}
